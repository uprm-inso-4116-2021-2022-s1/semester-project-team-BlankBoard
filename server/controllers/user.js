
const users = async (req, res, pool) => {
    try {
        res.status(200).send('This is the users get request.')
    } catch (e) {
        res.status(400).send(err);
    }
}

module.exports = {
    users
}