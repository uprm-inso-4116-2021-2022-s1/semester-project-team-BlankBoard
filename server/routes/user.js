const { Router } = require('express');
const {
    users,
    userID,
    followID,
    followedByID,
    followsID,
    unfollowID,
    blockID,
    blockedByID,
    blockingID,
    unblockID

} = require('../controllers/user');

const userRoutes = (pool) => {
    const router = Router();

    router.get('/users', (req, res) => users(req, res, pool));
    router.get('/users/:id', (req, res) => userID(req, res, pool));
    router.post('/follow/:id', (req, res) => followID(req, res, pool));
    router.get('/followedby/:id', (req, res) => followedByID(req, res, pool));
    router.get('/follows/:id', (req, res) => followsID(req, res, pool));
    router.post('/unfollow/:id', (req, res) => unfollowID(req, res, pool));
    router.post('/block/:id', (req, res) => blockID(req, res, pool));
    router.get('/blockedby/:id', (req, res) => blockedByID(req, res, pool));
    router.get('/blocking/:id', (req, res) => blockingID(req, res, pool));
    router.post('/unblock/:id', (req, res) => unblockID(req, res, pool));

    

    return router;
}

module.exports = userRoutes;