const bcrypt = require('bcrypt');
const LocalStrategy = require('passport-local').Strategy;

const useLocalStrategy = (passport, pool) => {
    passport.use(
      new LocalStrategy(
        {
          usernameField: 'username',
          passwordField: 'password',
        },
        async (username, password, done) => {
          const user = (
            await pool.query(
              'SELECT * FROM Users WHERE username = $1',
              [username],
            )
          ).rows[0];
  
          if (!user) {
            return done(null, false, {
              message: 'No user exists with this name.',
            });
          }
  
          try {
            if (await bcrypt.compare(password, user.password)) {
              return done(null, user);
            }
            return done(null, false, {
              message: 'Your password is incorrect.',
            });
          } catch (err) {
            return done(err);
          }
        },
      ),
    );
    
    // Store user id in session
    passport.serializeUser((user, done) => done(null, user.uid));

    // Retrieve stored user
    passport.deserializeUser(async (id, done) =>
      done(
        null,
        (await pool.query('SELECT * FROM Users WHERE uid = $1', [id]))
          .rows[0],
      ),
    );
  };
  
  module.exports = useLocalStrategy;