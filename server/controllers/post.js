
const post = async (req, res, pool) => {
    try {
        res.status(200).send('This is the post post request.')
    } catch (e) {
        res.status(400).send(err);
    }
}

const replyID = async (req, res, pool) => {
    try {
        res.status(200).send('This is the replyID post request.')
    } catch (e) {
        res.status(400).send(err);
    }
}

const getPosts = async (req, res, pool) => {
    try {
        res.status(200).send('This is the getPosts get request.')
    } catch (e) {
        res.status(400).send(err);
    }
}

const getPostsByID = async (req, res, pool) => {
    try {
        res.status(200).send('This is the getPostsByID get request.')
    } catch (e) {
        res.status(400).send(err);
    }
}

module.exports = {
    post,
    replyID,
    getPosts,
    getPostsByID

}