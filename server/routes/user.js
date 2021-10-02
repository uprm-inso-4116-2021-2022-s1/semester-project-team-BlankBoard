const { Router } = require('express');
const {
    users
} = require('../controllers/user');

const userRoutes = (pool) => {
    const router = Router();

    router.get('/users', (req, res) => users(req, res, pool));
    return router;
}

module.exports = userRoutes;