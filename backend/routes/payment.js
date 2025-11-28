const express = require('express');
const axios = require('axios');
const { authMiddleware } = require('../middleware/auth');
const db = require('../database');

const router = express.Router();

// Toss Payments configuration
const TOSS_SECRET_KEY = process.env.TOSS_SECRET_KEY;
const TOSS_CLIENT_KEY = process.env.TOSS_CLIENT_KEY;

// Get Toss client key (for frontend)
router.get('/toss-key', (req, res) => {
    res.json({
        success: true,
        clientKey: TOSS_CLIENT_KEY
    });
});

// Create payment request
router.post('/create', authMiddleware, async (req, res) => {
    try {
        const { plan, amount } = req.body;
        const userId = req.user.id;

        // Validate plan
        const validPlans = {
            monthly: 9900,
            yearly: 99000,
            credits: 4900
        };

        if (!validPlans[plan] || validPlans[plan] !== amount) {
            return res.status(400).json({
                success: false,
                message: '유효하지 않은 결제 정보입니다.'
            });
        }

        // Create payment record
        const payment = db.payments.create({
            userId,
            plan,
            amount,
            status: 'pending',
            orderId: `order-${Date.now()}-${Math.random().toString(36).substr(2, 9)}`
        });

        res.json({
            success: true,
            payment: {
                orderId: payment.orderId,
                amount: payment.amount,
                orderName: plan === 'monthly' ? '월간 프리미엄' :
                    plan === 'yearly' ? '연간 프리미엄' :
                        '크레딧 10개',
                customerEmail: req.user.email,
                customerName: req.user.name
            }
        });
    } catch (error) {
        res.status(500).json({
            success: false,
            message: '결제 생성 중 오류가 발생했습니다.',
            error: error.message
        });
    }
});

// Confirm payment (called after Toss redirect)
router.post('/confirm', authMiddleware, async (req, res) => {
    try {
        const { paymentKey, orderId, amount } = req.body;

        // Find payment
        const payments = db.payments.getAll();
        const payment = payments.find(p => p.orderId === orderId);

        if (!payment) {
            return res.status(404).json({
                success: false,
                message: '결제 정보를 찾을 수 없습니다.'
            });
        }

        // Verify with Toss Payments
        try {
            const response = await axios.post(
                'https://api.tosspayments.com/v1/payments/confirm',
                {
                    paymentKey,
                    orderId,
                    amount
                },
                {
                    headers: {
                        'Authorization': `Basic ${Buffer.from(TOSS_SECRET_KEY + ':').toString('base64')}`,
                        'Content-Type': 'application/json'
                    }
                }
            );

            // Update payment status
            db.payments.update(payment.id, {
                status: 'completed',
                paymentKey,
                completedAt: new Date(),
                tossResponse: response.data
            });

            // Update user credits/premium status
            const user = db.users.findById(payment.userId);
            if (payment.plan === 'monthly' || payment.plan === 'yearly') {
                db.users.update(user.email, {
                    isPremium: true,
                    premiumUntil: payment.plan === 'monthly'
                        ? new Date(Date.now() + 30 * 24 * 60 * 60 * 1000)
                        : new Date(Date.now() + 365 * 24 * 60 * 60 * 1000)
                });
            } else if (payment.plan === 'credits') {
                db.users.update(user.email, {
                    credits: user.credits + 10
                });
            }

            res.json({
                success: true,
                message: '결제가 완료되었습니다.',
                payment: {
                    orderId: payment.orderId,
                    amount: payment.amount,
                    status: 'completed'
                }
            });
        } catch (tossError) {
            // Toss API error
            db.payments.update(payment.id, {
                status: 'failed',
                error: tossError.response?.data || tossError.message
            });

            return res.status(400).json({
                success: false,
                message: '결제 승인에 실패했습니다.',
                error: tossError.response?.data?.message || tossError.message
            });
        }
    } catch (error) {
        res.status(500).json({
            success: false,
            message: '결제 확인 중 오류가 발생했습니다.',
            error: error.message
        });
    }
});

// Get payment history
router.get('/history', authMiddleware, (req, res) => {
    try {
        const payments = db.payments.getByUser(req.user.id);

        res.json({
            success: true,
            payments: payments.map(p => ({
                id: p.id,
                orderId: p.orderId,
                plan: p.plan,
                amount: p.amount,
                status: p.status,
                createdAt: p.createdAt,
                completedAt: p.completedAt
            }))
        });
    } catch (error) {
        res.status(500).json({
            success: false,
            message: '결제 내역 조회 중 오류가 발생했습니다.',
            error: error.message
        });
    }
});

module.exports = router;
