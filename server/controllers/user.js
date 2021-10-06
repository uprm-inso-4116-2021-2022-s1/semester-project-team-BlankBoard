
const users = async (req, res, pool) => {
    try {
        res.status(200).send('This is the users get request.')
    } catch (e) {
        res.status(400).send(err);
    }
}

const userID = async (req, res, pool) => {
    try {
        res.status(200).send('This is the userByID get request.')
    } catch (e) {
        res.status(400).send(err);
    }
}

const followID = async (req, res, pool) => {
    try {
        res.status(200).send('This is the followID post request.')
    } catch (e) {
        res.status(400).send(err);
    }
}

const followedByID = async (req, res, pool) => {
    try {
        res.status(200).send('This is the followedByID get request.')
    } catch (e) {
        res.status(400).send(err);
    }
}

const followsID = async (req, res, pool) => {
    try {
        res.status(200).send('This is the followsID get request.')
    } catch (e) {
        res.status(400).send(err);
    }
}

const unfollowID = async (req, res, pool) => {
    try {
        res.status(200).send('This is the unfollowID post request.')
    } catch (e) {
        res.status(400).send(err);
    }
}

const blockID = async (req, res, pool) => {
    try {
        res.status(200).send('This is the blockID post request.')
    } catch (e) {
        res.status(400).send(err);
    }
}

const blockedByID = async (req, res, pool) => {
    try {
        res.status(200).send('This is the blockedByID get request.')
    } catch (e) {
        res.status(400).send(err);
    }
}

const blockingID = async (req, res, pool) => {
    try {
        res.status(200).send('This is the blockingID get request.')
    } catch (e) {
        res.status(400).send(err);
    }
}

const unblockID = async (req, res, pool) => {
    try {
        res.status(200).send('This is the unblockID post request.')
    } catch (e) {
        res.status(400).send(err);
    }
}

module.exports = {
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
    
}