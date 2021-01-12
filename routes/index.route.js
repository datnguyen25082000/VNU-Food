var express = require('express');
let User = require('../models/user.model');

var router = express.Router();

/* GET home page. */
router.get('/', function (req, res, next) {
  res.render('index', { title: '//' });
});

router.post('/authenticate', (req, res) => {
  const options = {
    httpOnly: true,
    signed: true,
  };

  console.log(req.body)

  const user = User.findOne(req.body)
    .then(user => {
      if (user !== undefined) {
        console.log(user)
        if (user.userType == 'admin' || user.userType == 'user') {
          console.log('ok')
          if (req.cookies.toString() != '') {
            res.cookie('account', user.userType, { signed: true });
          }

          res.status(200).json({ screen: user.userType });
        }
      }
      else {
        res.status(200).json({ screen: '' })
      }
    }
    )
    .catch(error => res.status(200).json({ screen: '' }));
});

router.get('/read-cookie', (req, res) => {
  const options = {
    httpOnly: true,
    signed: true,
  };

  if (req.signedCookies.account === 'admin') {
    res.send({ screen: 'admin' });
  } else if (req.signedCookies.account === 'user') {
    res.send({ screen: 'user' });
  } else {
    res.send({ screen: 'auth' });
  }
});

router.get('/clear-cookie', (req, res) => {
  res.clearCookie('account').end();
});

router.get('/get-data', (req, res) => {
  if (req.signedCookies.name === 'admin') {
    res.send('This is admin panel');
  } else if (req.signedCookies.name === 'user') {
    res.send('This is user data');
  } else {
    res.end();
  }
});

router.post('/register', (req, res) => {
  console.log('register')
});

module.exports = router;
