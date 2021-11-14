const { Router } = require('express');
const bcrypt = require('bcrypt');
const jwtGenerator = require("../utils/jwtGenerator");
const validInfo = require('../middleware/validInfo')
const authorize = require('../middleware/authorize');
const authRoutes = (pool) => {
  const router = Router();

  router.post('/register', validInfo, async (req, res) => {
    const { email, username, screen_name, password } = req.body;
    const passwordHash = await bcrypt.hash(password, 10);

    try {
      const user = await pool.query("SELECT * FROM users WHERE email = $1", [
        email
      ]);

      if (user.rows.length > 0) {
        return res.status(401).json("User already exists!");
      }

      let newUser = await pool.query(
        'INSERT INTO Users(username, screen_name, password, email) VALUES ($1, $2, $3, $4) RETURNING *',
        [username, screen_name, passwordHash, email]
      )

      const jwtToken = jwtGenerator(newUser.rows[0].user_id);

      return res.json({ jwtToken });
    } catch (e) {
      console.log(e.message);
      res.status(500).send("Server error");
    }
  });

  router.post('/login', validInfo, async (req, res) => {
    const { email, password } = req.body;

    try {
      const user = await pool.query("SELECT * FROM users WHERE email = $1", [
        email
      ]);

      if (user.rows.length === 0) {
        return res.status(401).json("Invalid Credential");
      }

      const validPassword = await bcrypt.compare(
        password,
        user.rows[0].password
      );

      if (!validPassword) {
        return res.status(401).json("Invalid Credential");
      }
      const jwtToken = jwtGenerator(user.rows[0].user_id);
      return res.json({ jwtToken });
    } catch (err) {
      console.error(err.message);
      res.status(500).send("Server error");
    }
  });

  router.get('/verify', authorize, async (req, res) => {
    try {
      res.json(true);
    } catch (e) {
      console.error(e.message);
      res.status(500).send('Server error.');
    }
  })

  return router;
}

module.exports = authRoutes;