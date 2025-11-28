const express = require('express');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const db = require('../database');

const router = express.Router();

// Register
router.post('/register', async (req, res) => {
    try {
        const { email, password, name } = req.body;

        // Validation
        if (!email || !password || !name) {
            return res.status(400).json({
                success: false,
                message: '모든 필드를 입력해주세요.'
            });
        }

        // Check if user exists
        if (db.users.findByEmail(email)) {
            return res.status(400).json({
                success: false,
                message: '이미 등록된 이메일입니다.'
            });
        }

        // Hash password
        const hashedPassword = await bcrypt.hash(password, 10);

        // Create user
        const user = db.users.create({
            email,
            password: hashedPassword,
            name,
            role: 'user'
        });

        // Generate token
        const token = jwt.sign(
            { userId: user.id, email: user.email },
            process.env.JWT_SECRET,
            { expiresIn: '7d' }
        );

        res.json({
            success: true,
            message: '회원가입이 완료되었습니다.',
            token,
            user: {
                id: user.id,
                email: user.email,
                name: user.name,
                credits: user.credits,
                isPremium: user.isPremium
            }
        });
    } catch (error) {
        res.status(500).json({
            success: false,
            message: '회원가입 중 오류가 발생했습니다.',
            error: error.message
        });
    }
});

// Login
router.post('/login', async (req, res) => {
    try {
        const { email, password } = req.body;

        // Validation
        if (!email || !password) {
            return res.status(400).json({
                success: false,
                message: '이메일과 비밀번호를 입력해주세요.'
            });
        }

        // Find user
        const user = db.users.findByEmail(email);
        if (!user) {
            return res.status(401).json({
                success: false,
                message: '이메일 또는 비밀번호가 올바르지 않습니다.'
            });
        }

        // Check password
        const isValidPassword = await bcrypt.compare(password, user.password);
        if (!isValidPassword) {
            return res.status(401).json({
                success: false,
                message: '이메일 또는 비밀번호가 올바르지 않습니다.'
            });
        }

        // Update last login
        db.users.update(email, { lastLogin: new Date() });

        // Generate token
        const token = jwt.sign(
            { userId: user.id, email: user.email },
            process.env.JWT_SECRET,
            { expiresIn: '7d' }
        );

        res.json({
            success: true,
            message: '로그인 성공',
            token,
            user: {
                id: user.id,
                email: user.email,
                name: user.name,
                credits: user.credits,
                isPremium: user.isPremium,
                role: user.role
            }
        });
    } catch (error) {
        res.status(500).json({
            success: false,
            message: '로그인 중 오류가 발생했습니다.',
            error: error.message
        });
    }
});

module.exports = router;
