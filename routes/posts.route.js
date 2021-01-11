const express = require('express');
const commentModel = require('../models/comment.model');
const PostModel = require('../models/post.model');

const router = express.Router();

router.get('/', async function (req, res) {
  const rows = await PostModel.all();
  res.send({
    posts: rows,
    empty: rows.length === 0
  });
})

router.get('/add', function (req, res) {
  res.render('vwUsers/add');
})

router.get('/getComment', async function (req, res) {
  const commentPost = req.query.commentPost;
  console.log(commentPost);
  let rows = await commentModel.single(commentPost);

  //handle time
  rows.forEach(row => {
    let seconds = Math.round(Math.abs((new Date() - row.commentTime) / (1000)));
    let minutes = 0, hours = 0, days = 0, months = 0, years = 0;
    row.commentTime = seconds + " giây"
    if (seconds >= 60) {
      minutes = Math.round(seconds/60);
      row.commentTime = minutes + " phút"
    } 
    if (minutes >= 60) {
      hours = Math.round(minutes/60);
      row.commentTime = hours + " giờ"
    }
    if (hours >= 24) {
      days = Math.round(hours/24);
      row.commentTime = days + " ngày"
    }
    if (days >= 30) {
      months = Math.round(days/30);
      row.commentTime = months + " tháng"
    }
    if (months >= 12) {
      years = Math.round(months/12);
      row.commentTime = years + " năm"
    }
  });
  console.log(rows);
  
  res.send({
    rows
  });
})

router.post('/add', async function (req, res) {
  const ret = await PostModel.add(req.body);
})

router.post('/del', async function (req, res) {
  const ret = await PostModel.del(req.body);
})

router.post('/patch', async function (req, res) {
  const ret = await PostModel.patch(req.body);
  res.redirect('/users');
})

router.get('/:id', async function (req, res) {
  const id = req.params.id;
  const post = await PostModel.single(id);
  if (post === null) {
    return 0;
  }
  res.send({
    post
  });
})

module.exports = router;