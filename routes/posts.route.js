const express = require('express');
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