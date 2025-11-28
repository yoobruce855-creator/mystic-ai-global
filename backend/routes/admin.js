const express = require('express');
const { authMiddleware, adminMiddleware } = require('../middleware/auth');
const db = require('../database');

const router = express.Router();

// All admin routes require authentication and admin role
router.use(authMiddleware);
router.use(adminMiddleware);

// Get dashboard stats
router.get('/stats', (req, res) => {
    try {
        const userStats = db.users.getStats();
        const paymentStats = db.payments.getStats();
        const usageStats = db.usage.getStats();

        res.json({
            success: true,
            stats: {
                users: userStats,
                payments: paymentStats,
                usage: usageStats
            }
        });
    } catch (error) {
        res.status(500).json({
            success: false,
            message: '통계 조회 중 오류가 발생했습니다.',
            error: error.message
        });
    }
});

// Get all users
router.get('/users', (req, res) => {
    try {
        const users = db.users.getAll();

        res.json({
            success: true,
            users: users.map(u => ({
                id: u.id,
                email: u.email,
                name: u.name,
                credits: u.credits,
                isPremium: u.isPremium,
                premiumUntil: u.premiumUntil,
                createdAt: u.createdAt,
                lastLogin: u.lastLogin
            }))
        });
    } catch (error) {
        res.status(500).json({
            success: false,
            message: '사용자 목록 조회 중 오류가 발생했습니다.',
            error: error.message
        });
    }
});

// Update user credits
router.post('/users/:userId/credits', (req, res) => {
    try {
        const { userId } = req.params;
        const { credits } = req.body;

        const user = db.users.findById(userId);
        if (!user) {
            return res.status(404).json({
                success: false,
                message: '사용자를 찾을 수 없습니다.'
            });
        }

        const updated = db.users.update(user.email, { credits });

        res.json({
            success: true,
            message: '크레딧이 업데이트되었습니다.',
            user: {
                id: updated.id,
                email: updated.email,
                credits: updated.credits
            }
        });
    } catch (error) {
        res.status(500).json({
            success: false,
            message: '크레딧 업데이트 중 오류가 발생했습니다.',
            error: error.message
        });
    }
});

// Update user premium status
router.post('/users/:userId/premium', (req, res) => {
    try {
        const { userId } = req.params;
        const { isPremium, premiumUntil } = req.body;

        const user = db.users.findById(userId);
        if (!user) {
            return res.status(404).json({
                success: false,
                message: '사용자를 찾을 수 없습니다.'
            });
        }

        const updated = db.users.update(user.email, {
            isPremium,
            premiumUntil: premiumUntil ? new Date(premiumUntil) : null
        });

        res.json({
            success: true,
            message: '프리미엄 상태가 업데이트되었습니다.',
            user: {
                id: updated.id,
                email: updated.email,
                isPremium: updated.isPremium,
                premiumUntil: updated.premiumUntil
            }
        });
    } catch (error) {
        res.status(500).json({
            success: false,
            message: '프리미엄 상태 업데이트 중 오류가 발생했습니다.',
            error: error.message
        });
    }
});

// Get all payments
router.get('/payments', (req, res) => {
    try {
        const payments = db.payments.getAll();

        res.json({
            success: true,
            payments: payments.map(p => ({
                id: p.id,
                userId: p.userId,
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

// Get revenue chart data
router.get('/revenue-chart', (req, res) => {
    try {
        const payments = db.payments.getAll().filter(p => p.status === 'completed');

        // Group by date (last 30 days)
        const chartData = [];
        for (let i = 29; i >= 0; i--) {
            const date = new Date();
            date.setDate(date.getDate() - i);
            date.setHours(0, 0, 0, 0);

            const nextDate = new Date(date);
            nextDate.setDate(nextDate.getDate() + 1);

            const dayPayments = payments.filter(p =>
                p.createdAt >= date && p.createdAt < nextDate
            );

            const revenue = dayPayments.reduce((sum, p) => sum + p.amount, 0);

            chartData.push({
                date: date.toISOString().split('T')[0],
                revenue,
                transactions: dayPayments.length
            });
        }

        res.json({
            success: true,
            chartData
        });
    } catch (error) {
        res.status(500).json({
            success: false,
            message: '차트 데이터 조회 중 오류가 발생했습니다.',
            error: error.message
        });
    }
});

module.exports = router;
