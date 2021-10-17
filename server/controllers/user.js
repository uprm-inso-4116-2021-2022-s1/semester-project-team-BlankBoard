const bcrypt = require("bcrypt");

const usersPost = async (req, res, pool) => {
  try {
    const username = req.body.username;
    const password = req.body.password;
    const email = req.body.email;
    const passwordHash = await bcrypt.hash(password, 10);

    await pool.query(
      "INSERT INTO Users(username, password, email) VALUES ($1, $2, $3)",
      [username, passwordHash, email]
    );

    res.status(200).send();
  } catch (e) {
    res.status(400).send(e);
  }
};

const usersGet = async (req, res, pool) => {
  try {
    const { query } = req;

    const selectors = Object.keys(query);

    let queryString = "SELECT * FROM Users";

    if (selectors.length > 0) queryString += "\tWHERE\t";

    selectors.forEach((selector, i) => {
      queryString += `\t${selector}=$${i + 1}\t`;
      if (i < selectors.length - 1) queryString += `\tAND\t`;
    });

    const table = await pool.query(queryString, Object.values(query));
    res.json(table.rows);
  } catch (e) {
    console.log(e);
    res.status(400).send(e);
  }
};

const usersGetId = async (req, res, pool) => {
  try {
    const { id } = req.params;

    const table = await pool.query("SELECT * FROM Users WHERE user_id = $1", [
      id,
    ]);

    if (table.rows.length === 0) {
      res.json({ error: "No user with this Id exists." });
    }
    res.json(table.rows[0]);
  } catch (e) {
    console.log(e);
    res.status(400).send(e);
  }
};

const usersPutId = async (req, res, pool) => {
  try {
    const { id } = req.params;

    const newValues = Object.keys(req.body);

    let queryString = "UPDATE Users SET ";

    newValues.forEach((field, i) => {
      queryString += `${field}=$${i + 1}`;
      if (i !== newValues.length - 1) queryString += ",";
    });

    queryString += ` WHERE user_id=$${newValues.length + 1}`;

    await pool.query(queryString, [...Object.values(req.body), id]);

    res.status(200).send();
  } catch (e) {
    console.log(e);
    res.status(400).send(e);
  }
};

const usersDelId = async (req, res, pool) => {
  try {
    const { id } = req.params;

    await pool.query("DELETE FROM Users WHERE user_id = $1", [id]);

    //res.json(table.rows[0]);
    res.status(200).send();
  } catch (e) {
    console.log(e);
    res.status(400).send(e);
  }
};

const followID = async (req, res, pool) => {
  try {
    const { id } = req.params; // user to be followed
    const { user_id } = req.body; // user following

    await pool.query(
      "INSERT INTO Follows (follower_id, followee_id) VALUES ($1,$2)",
      [user_id, id]
    );
    res.status(201).end();

    // The id of the follower needs to be passed through the body
  } catch (e) {
    res.status(400).send(e);
  }
};

const unfollowID = async (req, res, pool) => {
  try {
    const { id } = req.params;
    const { user_id } = req.body;

    await pool.query(
      "DELETE FROM Follows WHERE follower_id=$1 AND followee_id=$2",
      [user_id, id]
    );
    res.status(200).end();
  } catch (e) {
    res.satus(400).send(e);
  }
};

const followedByID = async (req, res, pool) => {
  try {
    const { id } = req.params;

    const table = await pool.query(
      "SELECT U.user_id, U.username, U.password FROM Follows as F, Users as U WHERE F.followee_id = U.user_id AND follower_id=$1",
      [id]
    );
    res.json(table.rows);
  } catch (e) {
    res.status(400).send(e);
  }
};

const followsID = async (req, res, pool) => {
  try {
    const { id } = req.params;

    const table = await pool.query(
      "SELECT U.user_id,U.username,U.password FROM Follows as F, Users as U WHERE F.follower_id = U.user_id AND F.followee_id=$1",
      [id]
    );
    res.json(table.rows);
  } catch (e) {
    res.status(400).send(e);
  }
};

// Requires user authentication
const blockID = async (req, res, pool) => {
  try {
    const { id } = req.params; // user being blocked
    const { user_id } = req.body; // user blocking

    await pool.query(
      "INSERT INTO Blocks (blocker_id,blockee_id) VALUES($1,$2)",
      [user_id, id]
    );
    res.status(201).end();
  } catch (e) {
    res.status(400).send(e);
  }
};

const unblockID = async (req, res, pool) => {
  try {
    const { id } = req.params; // user being unblocked
    const { user_id } = req.body; // user unblocking

    await pool.query(
      "DELETE FROM Blocks WHERE blocker_id = $1 AND blockee_id = $2",
      [user_id, id]
    );
    res.status(200).end();
  } catch (e) {
    res.status(400).send(e);
  }
};

const blockedByID = async (req, res, pool) => {
  try {
    const { id } = req.params;

    const table = await pool.query(
      "SELECT U.user_id, U.username, U.password FROM Blocks as B, Users U WHERE B.blockee_id = U.user_id AND B.blocker_id = $1",
      [id]
    );
    res.json(table.rows);
  } catch (e) {
    res.status(400).send(e);
  }
};

const blockingID = async (req, res, pool) => {
  try {
    const { id } = req.params;

    const table = await pool.query(
      "SELECT U.user_id, U.username, U.password FROM Blocks as B, Users U WHERE B.blocker_id = U.user_id AND B.blockee_id = $1",
      [id]
    );
    res.json(table.rows);
  } catch (e) {
    res.status(400).send(e);
  }
};

const test = async (req, res, pool) => {
  try {
    let queryString = "";
    await pool.query(queryString, []);
    res.status(200).send();
  } catch (e) {
    console.log(e);
    res.status(400).send(e);
  }
};

module.exports = {
  usersPost,
  usersGet,
  usersGetId,
  usersPutId,
  usersDelId,
  followID,
  followedByID,
  followsID,
  unfollowID,
  blockID,
  blockedByID,
  blockingID,
  unblockID,
  test,
};
