
// Requires user authentication
const post = async (req, res, pool) => {
    try {
        const { UserId, Content } = req.body;

        await pool.query(
            'INSERT INTO Posts (uid, content) VALUES ($1, $2)',
            [UserId, Content],
        );
        res.status(201).end();
    } catch (e) {
        console.log(e);
        res.status(400).send(e);
    }
}



const replyID = async (req, res, pool) => {
    try {
        // user replying, post being replied to, and content being replied
        const { UserId, PostId, Content } = req.body;

        await pool.query(
            'INSERT INTO Replies (uid, pid, content) VALUES ($1, $2, $3)',
            [UserId, PostId, Content],
        );
        res.status(201).end();
    } catch (e) {
        res.status(400).send(e);
    }
}

const getPosts = async (req, res, pool) => {
    try {
        const table = await pool.query('SELECT * FROM Posts');
        const temp = [];

        table.rows.forEach((element) => {
            const { pid, uid, content, timestamp } = element;

            temp.push({
                ID: pid,
                UserId: uid,
                Text: content,
                Date: timestamp,
            });
        });
        res.json(temp);
    } catch (e) {
        res.status(400).send(e);
    }
}

const getPostsByID = async (req, res, pool) => {
    try {
        const { id } = req.params;

        const table = await pool.query('SELECT * FROM Posts WHERE pid = $1', [
            id,
        ]);
        const { pid, uid, content, timestamp } = table.rows[0];
        res.json({
            ID: pid,
            UserId: uid,
            Text: content,
            Date: timestamp,
        });
    } catch (e) {
        res.status(400).send(e);
    }
}

module.exports = {
    post,
    replyID,
    getPosts,
    getPostsByID

}