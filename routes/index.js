var express = require('express');

var router = express.Router();

/* GET home page. */
router.get('/', function (req, res, next) {
  console.log(req.cookies);
  res.cookie('cookie1', 'This is my first cookie', { signed: true });
  res.render('index', { title: '//' });

});

router.post('/authenticate', (req, res) => {
  const options = {
    httpOnly: true,
    signed: true,
  };

  console.log("req body : " + req.body.username + " " + req.body.password);

  if (req.body.username == 'admin' || req.body.username == 'user') {
    
    console.log(req.cookies);

    try {
      if(req.cookies.toString() != '') {
        res.cookie('account', req.body.username , { signed : true });
      }
    } catch (error) {
      
    }
    
    res.status(200).json({ screen: req.body.username });
  } 
  else {
    res.status(200).json({ screen: '' });
  }
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


module.exports = router;
