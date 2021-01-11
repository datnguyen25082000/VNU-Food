const express = require('express');
const commentModel = require('../models/comment.model');
const UserModel = require('../models/user.model');

const router = express.Router();

router.get('/', async function (req, res) {
  const rows = await UserModel.all();
  res.send({
    users: rows,
    empty: rows.length === 0
  });
})

router.get('/add', function (req, res) {
  res.render('vwUsers/add');
})

router.post('/add', async function (req, res) {
  const ret = await UserModel.add(req.body);
})

router.post('/del', async function (req, res) {
  const ret = await UserModel.del(req.body);
})

router.post('/patch', async function (req, res) {
  const ret = await UserModel.patch(req.body);
  res.redirect('/users');
})

//send comment
router.post('/comment', async function (req, res) {
  console.log(req.body);
  let data = {
    //commentUser: ,
    commentPost: req.body.commentPost,
    commentContent: req.body.commentContent,
    commentTime: new Date().toISOString().slice(0, 19).replace('T', ' ')
  };

  console.log(data);

  //const ret = await commentModel.add(data);
})

router.get('/:id', async function (req, res) {
  const id = req.params.id;
  const user = await UserModel.single(id);
  if (user === null) {
    return 0;
  }

  res.send({
    editUser: user
  });
})

module.exports = router;