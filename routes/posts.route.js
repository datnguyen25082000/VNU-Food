const express = require('express');
const PostModel = require('../models/post.model');
const multer = require('multer');
const router = express.Router();

router.get('/', async function (req, res) {
  const rows = await PostModel.all();
  res.send({
    posts: rows,
    empty: rows.length === 0
  });
})

router.post('/add', function (req, res) {
  console.log(req.body);
  const storage = multer.diskStorage({
    destination: function (req, file, cb) {
      cb(null, './public/imagesPost/')
    },
    filename: function (req, file, cb) {
      cb(null, file.originalname)
    }
  });
  const upload = multer({ storage })
  upload.array('postImage', 10)(req, res, function (err) {
    if (err) {
      console.log(err)
    }
    else {
      console.log('upload file success')
    }
  })
  res.send(true)
  // const ret = await PostModel.add(req.body);
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