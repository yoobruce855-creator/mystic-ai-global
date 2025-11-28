// In-memory database (for development)
// In production, replace with PostgreSQL, MongoDB, etc.

const users = new Map();
const payments = new Map();
const usageHistory = new Map();

// Initialize admin user
const bcrypt = require('bcryptjs');
const adminPassword = bcrypt.hashSync(process.env.ADMIN_PASSWORD || 'admin123', 10);

users.set('admin@mysticai.com', {
    id: 'admin-001',
    email: 'admin@mysticai.com',
    password: adminPassword,
    role: 'admin',
    credits: 999999,
    isPremium: true,
    createdAt: new Date(),
    lastLogin: new Date()
});

// Database operations
const db = {
    // User operations
    users: {
        create: (userData) => {
            const id = `user-${Date.now()}-${Math.random().toString(36).substr(2, 9)}`;
            const user = {
                id,
                ...userData,
                credits: 3, // Free credits
                isPremium: false,
                createdAt: new Date(),
                lastLogin: new Date()
            };
            users.set(userData.email, user);
            return user;
        },

        findByEmail: (email) => {
            return users.get(email);
        },

        findById: (id) => {
            for (let user of users.values()) {
                if (user.id === id) return user;
            }
            return null;
        },

        update: (email, updates) => {
            const user = users.get(email);
            if (!user) return null;

            const updated = { ...user, ...updates };
            users.set(email, updated);
            return updated;
        },

        getAll: () => {
            return Array.from(users.values()).filter(u => u.role !== 'admin');
        },

        getStats: () => {
            const allUsers = Array.from(users.values()).filter(u => u.role !== 'admin');
            return {
                total: allUsers.length,
                premium: allUsers.filter(u => u.isPremium).length,
                free: allUsers.filter(u => !u.isPremium).length,
                active: allUsers.filter(u => {
                    const dayAgo = new Date(Date.now() - 24 * 60 * 60 * 1000);
                    return u.lastLogin > dayAgo;
                }).length
            };
        }
    },

    // Payment operations
    payments: {
        create: (paymentData) => {
            const id = `payment-${Date.now()}-${Math.random().toString(36).substr(2, 9)}`;
            const payment = {
                id,
                ...paymentData,
                createdAt: new Date()
            };
            payments.set(id, payment);
            return payment;
        },

        findById: (id) => {
            return payments.get(id);
        },

        update: (id, updates) => {
            const payment = payments.get(id);
            if (!payment) return null;

            const updated = { ...payment, ...updates };
            payments.set(id, updated);
            return updated;
        },

        getAll: () => {
            return Array.from(payments.values());
        },

        getByUser: (userId) => {
            return Array.from(payments.values()).filter(p => p.userId === userId);
        },

        getStats: () => {
            const allPayments = Array.from(payments.values()).filter(p => p.status === 'completed');
            const total = allPayments.reduce((sum, p) => sum + p.amount, 0);

            const today = new Date();
            today.setHours(0, 0, 0, 0);
            const todayPayments = allPayments.filter(p => p.createdAt >= today);
            const todayRevenue = todayPayments.reduce((sum, p) => sum + p.amount, 0);

            const thisMonth = new Date(today.getFullYear(), today.getMonth(), 1);
            const monthPayments = allPayments.filter(p => p.createdAt >= thisMonth);
            const monthRevenue = monthPayments.reduce((sum, p) => sum + p.amount, 0);

            return {
                totalRevenue: total,
                totalTransactions: allPayments.length,
                todayRevenue,
                todayTransactions: todayPayments.length,
                monthRevenue,
                monthTransactions: monthPayments.length
            };
        }
    },

    // Usage history operations
    usage: {
        create: (usageData) => {
            const id = `usage-${Date.now()}-${Math.random().toString(36).substr(2, 9)}`;
            const usage = {
                id,
                ...usageData,
                createdAt: new Date()
            };

            if (!usageHistory.has(usageData.userId)) {
                usageHistory.set(usageData.userId, []);
            }
            usageHistory.get(usageData.userId).push(usage);
            return usage;
        },

        getByUser: (userId) => {
            return usageHistory.get(userId) || [];
        },

        getStats: () => {
            let totalUsage = 0;
            const serviceCount = {
                tarot: 0,
                saju: 0,
                dream: 0,
                compatibility: 0,
                naming: 0,
                today: 0
            };

            for (let userUsage of usageHistory.values()) {
                totalUsage += userUsage.length;
                userUsage.forEach(u => {
                    if (serviceCount[u.service] !== undefined) {
                        serviceCount[u.service]++;
                    }
                });
            }

            return {
                totalUsage,
                serviceCount
            };
        }
    }
};

module.exports = db;
