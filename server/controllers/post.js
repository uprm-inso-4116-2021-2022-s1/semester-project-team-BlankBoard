// Requires user authentication
const post = async (req, res, pool) => {
  try {
    const { user_id, post_content } = req.body;

    await pool.query(
      "INSERT INTO Posts (user_id, post_content) VALUES ($1, $2)",
      [user_id, post_content]
    );
    res.status(201).end();
  } catch (e) {
    console.log(e);
    res.status(400).send(e);
  }
};

const replyID = async (req, res, pool) => {
  try {
    // user replying, post being replied to, and post_content being replied
    const { user_id, post_id, post_content } = req.body;

    await pool.query(
      "INSERT INTO Replies (user_id, post_id, post_content) VALUES ($1, $2, $3)",
      [user_id, post_id, post_content]
    );
    res.status(201).end();
  } catch (e) {
    res.status(400).send(e);
  }
};

const getPosts = async (req, res, pool) => {
  try {
    const table = await pool.query("SELECT * FROM Posts");
    const temp = [];

    table.rows.forEach((element) => {
      const { post_id, user_id, post_content, timestamp } = element;

      temp.push({
        ID: post_id,
        user_id: user_id,
        Text: post_content,
        Date: timestamp,
      });
    });
    res.json(temp);
  } catch (e) {
    res.status(400).send(e);
  }
};

const getPostsByID = async (req, res, pool) => {
  try {
    const { id } = req.params;

    const table = await pool.query("SELECT * FROM Posts WHERE user_id = $1", [
      id,
    ]);
    const { post_id, user_id, post_content, post_timestamp } = table.rows[0];
    res.json({
      ID: post_id,
      UserId: user_id,
      Text: post_content,
      Date: post_timestamp,
    });
  } catch (e) {
    res.status(400).send(e);
  }
};

module.exports = {
  post,
  replyID,
  getPosts,
  getPostsByID,
};
