// Requires user authentication
const post = async (req, res, pool) => {
  try {
    const { user_id, post_content } = req.body;

    await pool.query(
      "INSERT INTO Posts (user_id, post_content) VALUES ($1, $2)",
      [user_id, post_content]
    );

    res.status(201).send();
  } catch (e) {
    console.log(e);
    res.status(400).send(e);
  }
};

const replyID = async (req, res, pool) => {
  try {
    // user replying, post being replied to, and post_content being replied
    const { user_id, post_id, replies_content } = req.body;

    await pool.query(
      "INSERT INTO Replies (user_id, post_id, replies_content) VALUES ($1, $2, $3)",
      [user_id, post_id, replies_content]
    );
    res.status(201).send();
  } catch (e) {
    res.status(400).send(e);
  }
};

const getPosts = async (req, res, pool) => {
  try {
    const table = await pool.query("SELECT * FROM Posts");

    res.json(table.rows);
  } catch (e) {
    res.status(400).send(e);
  }
};

const getRepliesByPostID = async (req, res, pool) => {
  const { id } = req.params;
  try {
    const table = await pool.query("SELECT * FROM Replies WHERE post_id = $1", [id]);
    res.json(table.rows);
  } catch (e) {
    res.status(400).send(e);
  }
};

const getPostsByID = async (req, res, pool) => {
  try {
    const { id } = req.params;

    const table = await pool.query("SELECT * FROM Posts WHERE post_id = $1", [
      id,
    ]);
    res.json(table.rows);
  } catch (e) {
    res.status(400).send(e);
  }
};

module.exports = {
  post,
  replyID,
  getPosts,
  getPostsByID,
  getRepliesByPostID
};
