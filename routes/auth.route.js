const express = require('express');
const router = express.Router();
const passport = require('passport');

const User = require('../models/user.model');
const { forwardAuthenticated } = require('./controllers/auth');

// Register
router.post('/register', (req, res) => {
  console.log(req.body);
  const { name, email, username, password, password2 } = req.body;

  User.single(username).then(user => {
    if (user) {

    } else {
      User.add({ userUsername: username, userPassword: password, userType: 1, userEmail: email, userDisplayName: name })
    }
  });
});

// Login
router.post('/login', (req, res) => {
  // passport.authenticate('local', {
  //   failureFlash: true
  // })(req, res);
  const username = req.body.username;
  const password = req.body.password;
  User.single(username.toString())
    .then(user => {
      console.log("hahahahah");
      if (!user) {
        res.send({ logged: false, code: 0 })
        return;
      }

      if (password == user.userPassword) {
        req.session.user = user;
        req.session.save();
        console.log(req.session);
        res.send({ user: user, logged: true })
      }

      else
        res.send({ user: null, logged: false, code: 1 })

    });
});

// Logout
router.post('/logout', (req, res) => {
  req.logout();
  req.flash('success_msg', 'You are logged out');
  res.redirect('/auth/login');
});

// check username
router.get('/is-available', async function (req, res) {
  const username = req.query.user;
  const user = await User.singleByUsername(username);
  if (user === null) {
    return res.json(true);
  }
  res.json(false);
})

module.exports = router;