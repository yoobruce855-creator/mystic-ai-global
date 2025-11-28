const express = require('express');
const { authMiddleware } = require('../middleware/auth');
const db = require('../database');

const router = express.Router();

// Get user profile
router.get('/profile', authMiddleware, (req, res) => {
    try {
        const user = req.user;

        res.json({
            success: true,
            user: {
                id: user.id,
                email: user.email,
                name: user.name,
                credits: user.credits,
                isPremium: user.isPremium,
                premiumUntil: user.premiumUntil,
                createdAt: user.createdAt,
                lastLogin: user.lastLogin
            }
        });
    } catch (error) {
        res.status(500).json({
            success: false,
            message: '프로필 조회 중 오류가 발생했습니다.',
            error: error.message
        });
    }
});

// Use service (deduct credits)
router.post('/use-service', authMiddleware, (req, res) => {
    try {
        const { service, creditsRequired } = req.body;
        const user = req.user;

        // Check if premium
        if (user.isPremium) {
            // Premium users don't need credits
            db.usage.create({
                userId: user.id,
                service,
                creditsUsed: 0,
                isPremium: true
            });

            return res.json({
                success: true,
                message: '프리미엄 회원은 무제한 이용 가능합니다.',
                credits: user.credits
            });
        }

        // Check credits
        if (user.credits < creditsRequired) {
            return res.status(400).json({
                success: false,
                message: '크레딧이 부족합니다.',
                required: creditsRequired,
                current: user.credits
            });
        }

        // Deduct credits
        const updatedUser = db.users.update(user.email, {
            credits: user.credits - creditsRequired
        });

        // Record usage
        db.usage.create({
            userId: user.id,
            service,
            creditsUsed: creditsRequired,
            isPremium: false
        });

        res.json({
            success: true,
            message: '서비스 이용이 완료되었습니다.',
            credits: updatedUser.credits,
            used: creditsRequired
        });
    } catch (error) {
        res.status(500).json({
            success: false,
            message: '서비스 이용 중 오류가 발생했습니다.',
            error: error.message
        });
    }
});

// Get usage history
router.get('/usage-history', authMiddleware, (req, res) => {
    try {
        const history = db.usage.getByUser(req.user.id);

        res.json({
            success: true,
            history: history.map(h => ({
                service: h.service,
                creditsUsed: h.creditsUsed,
                isPremium: h.isPremium,
                createdAt: h.createdAt
            }))
        });
    } catch (error) {
        res.status(500).json({
            success: false,
            message: '이용 내역 조회 중 오류가 발생했습니다.',
            error: error.message
        });
    }
});

module.exports = router;
