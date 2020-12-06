const express = require('express');
const mongoose = require('mongoose');
var cookieParser = require('cookie-parser');
var indexRouter = require('./routes/index');
var usersRouter = require('./routes/users');
var path = require('path');
var bodyParser = require('body-parser');

var app = express();
const PORT = process.env.PORT || 5000;


// connect to mongodb
// const uri = "" + process.env.ATLAS_URI;
// mongoose.connect(uri, { useNewUrlParser: true, useCreateIndex: true, useUnifiedTopology: true }
// );
// const connection = mongoose.connection

// connection.once('open', () => {
//   console.log("MongoDB database connection established successfully");
// })

// uncode url req
app.use(express.urlencoded({
  extended: true
}));

// view engine setup
app.set('views', path.join(__dirname, 'views'));
// public static
app.use('/public', express.static('public'));

// execute request format
app.use(express.json());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser("CibaQoHtaY0H3QOB1kqR8ad"));
app.use(express.static(path.join(__dirname, 'public')));


app.use('/users', usersRouter);
app.use('/', indexRouter);
app.use('/postList', require('./routes/postList.route'));

app.listen(PORT, () => {
  console.log(`Example app listening at http://localhost:` + PORT);
});




