const { Router } = require('express');
const {
    post,
    replyID,
    getPosts,
    getPostsByID,
    getReplies,
    getRepliesByPostID,
    deletePostByID,
    deleteReplyByID
} = require('../controllers/post');

const postRoutes = (pool) => {
    const router = Router();

    router.post('/post', (req, res) => post(req, res, pool));
    router.post('/reply', (req, res) => replyID(req, res, pool));
    router.get('/replies', (req, res) => getReplies(req, res, pool));
    router.get('/posts', (req, res) => getPosts(req, res, pool));
    router.get('/posts/:id', (req, res) => getPostsByID(req, res, pool));
    router.get('/replies/:id', (req, res) => getRepliesByPostID(req, res, pool));
    router.delete('/posts/:id', (req, res) => deletePostByID(req, res, pool));
    router.delete('/replies/:id', (req, res) => deleteReplyByID(req, res, pool));

    return router;
}

module.exports = postRoutes;