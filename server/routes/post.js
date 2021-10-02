const { Router } = require('express');
const {
    posts
} = require('../controllers/post');

const postRoutes = (pool) => {
    const router = Router();

    router.get('/posts', (req, res) => posts(req, res, pool));
    return router;
}

module.exports = postRoutes;