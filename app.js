var express = require('express');
var mongoose = require('mongoose');
var cookieParser = require('cookie-parser');
var cors = require('cors');
var path = require('path');
var bodyParser = require('body-parser');
require('dotenv').config();

var app = express();
const PORT = process.env.PORT || 5000;

// execute request format
app.use(cors());
app.use(express.json());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser("CibaQoHtaY0H3QOB1kqR8ad"));
app.use(express.static(path.join(__dirname, 'public')));

// uncode url req
app.use(express.urlencoded({
  extended: true
}));

// view engine setup
app.set('views', path.join(__dirname, 'views'));
// public static
app.use('/public', express.static('public'));

// connect to mongodb
const uri = "" + process.env.ATLAS_URI;
mongoose.connect(uri, { useNewUrlParser: true, useCreateIndex: true, useUnifiedTopology: true }
);
const connection = mongoose.connection

connection.once('open', () => {
  console.log("MongoDB database connection established successfully");
})


app.use('/users',  require('./routes/users'));
app.use('/', require('./routes/index'));
app.use('/postList', require('./routes/postList.route'));

app.listen(PORT, () => {
  console.log(`Example app listening at http://localhost:` + PORT);
});




