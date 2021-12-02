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
  const { user_id } = req.query;
  try {
    let table;
    if (user_id) {
      table = await pool.query("SELECT * FROM Posts WHERE user_id = $1", [user_id]);
    } else {
      table = await pool.query("SELECT * FROM Posts");
    }

    res.json(table.rows);
  } catch (e) {
    res.status(400).send(e);
  }
};

const getReplies = async (req, res, pool) => {
  const { user_id } = req.query;
  try {
    let table;
    if (user_id) {
      table = await pool.query("SELECT * FROM Replies WHERE user_id = $1", [user_id]);
    } else {
      table = await pool.query("SELECT * FROM Replies");
    }
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

const deletePostByID = async (req, res, pool) => {
  try {
    const { id } = req.params;

    const deletedPost = await pool.query('DELETE FROM Posts WHERE post_id = $1 RETURNING *', [id]);

    if (deletedPost.rows.length > 0) {
      res.status(200).json("Post succesfully deleted!");
    } else {
      res.status(400).json("No such post exists. Lucky you I guess.");
    }

  } catch (e) {
    console.log(e);
    res.status(400).send(e);
  }
}

const deleteReplyByID = async (req, res, pool) => {
  try {
    const { id } = req.params;

    const deletedReply = await pool.query('DELETE FROM replies WHERE reply_id = $1 RETURNING *', [id]);

    if (deletedReply.rows.length > 0) {
      res.status(200).json("Reply succesfully deleted!");
    } else {
      res.status(400).json("No such reply exists. Lucky you I guess.");
    }

  } catch (e) {
    console.log(e);
    res.status(400).send(e);
  }
}
module.exports = {
  post,
  replyID,
  getPosts,
  getPostsByID,
  getReplies,
  getRepliesByPostID,
  deletePostByID,
  deleteReplyByID
};
