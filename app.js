const express = require('express');
const cors = require('cors');
const exphbs = require('express-handlebars');
const numeral = require('numeral');
const mongoose = require('mongoose');
require('dotenv').config();
require('express-async-errors');

const app = express();
const PORT = process.env.PORT || 3001;

// connect to mongodb
const uri = "" + process.env.ATLAS_URI;
mongoose.connect(uri, { useNewUrlParser: true, useCreateIndex: true, useUnifiedTopology: true }
);
const connection = mongoose.connection

connection.once('open', () => {
  console.log("MongoDB database connection established successfully");
})

// uncode url req
app.use(express.urlencoded({
  extended: true
}));

// public static
app.use('/public', express.static('public'));

// hbs engine
app.engine('hbs', exphbs({
  defaultLayout: 'main.hbs',
  adminLayout: 'adminLayout.hbs',
  extname: '.hbs',
  layoutsDir: 'views/_layouts',
  partialsDir: 'views/_partials',
  helpers: {
    format(val) {
      return numeral(val).format('0,0');
    }
  }
}));
app.set('view engine', 'hbs');

// app.use(require('./middlewares/locals.mdw'));

app.get('/', function (req, res) {
  res.render('home');
});

app.get('/about', function (req, res) {
  throw new Error('ABOUT BROKEN');
  res.render('about');
});

app.get('/bs4', function (req, res) {
  const show = +req.query.show || 0;
  const visible = show !== 0;

  res.render('bs4', {
    layout: false,
    data: { visible: visible }
  });
});

// route
app.use('/postList', require('./routes/postList.route'));
app.use('/users', require('./routes/users.route'));

app.use(function (req, res) {
  res.render('404', {
    layout: false
  })
});

// default error handler
app.use(function (err, req, res, next) {
  console.error(err.stack);
  res.render('500', {
    layout: false
  })
})

app.listen(PORT, () => {
  console.log(`Example app listening at http://localhost:` + PORT);
});