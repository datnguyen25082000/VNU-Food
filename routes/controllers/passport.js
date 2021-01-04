const LocalStrategy = require('passport-local').Strategy;

// Load User model
const User = require('../../models/user.model');

module.exports = function (passport) {
  passport.use(
    new LocalStrategy({ usernameField: 'username' }, (username, password, done) => {
      // Match user
      console.log("vao local r ne");
      User.single(username.toString())
        .then(user => {
          console.log("hahahahah");
          if (!user) {
            return done(null, false, { message: 'That account is not registered' });
          }

          if (password == user.userPassword)
            return done(null, user);
          else
            return done(null, false, { message: 'Password incorrect' });

        });
    })
  );

  

  passport.serializeUser(function (user, done) {
    console.log("vao serial r ne");
    done(null, user);
  });

  passport.deserializeUser(function (user, done) {
    console.log("vao deserial r ne");
    done(null, user);
  });
};
