const express = require('express');
const commentModel = require('../models/comment.model');
const PostModel = require('../models/post.model');
const multer = require('multer');
const router = express.Router();
const fs = require('fs')

var index = 1;
const storage = multer.diskStorage({
  destination: async function (req, file, cb) {
    const maxIndex = await PostModel.maxIndex();
    var dir = './public/imagesPost/1';

    if (maxIndex[0].max !== null) {
      dir = './public/imagesPost/' + (parseInt(maxIndex[0].max) + 1);
    }

    if (!fs.existsSync(dir)) {
      index = 0;
      fs.mkdir(dir, error => cb(null, dir))
      return;
    }
    return cb(null, dir)
  },
  filename: function (req, file, cb) {
    index++;
    const name = '' + index + '.png'
    cb(null, name)
  }
});

const upload = multer({ storage });


router.get('/', async function (req, res) {
  const rows1 = await PostModel.all();
  const rows = Object.values(JSON.parse(JSON.stringify(rows1)))

  rows.forEach(post => {
    const postImageDir = post.postImage;
    post['image'] = 'http://localhost:5000/public/imagesPost/' + post.postID + '/' + '1.png';
  });

  res.send({
    posts: rows,
    empty: rows.length === 0
  });
})


router.get('/search', async function (req, res) {
  const data = req.query.data;

  const rows1 = await PostModel.allSearch(data);
  const rows = Object.values(JSON.parse(JSON.stringify(rows1)))

  rows.forEach(post => {
    const postImageDir = post.postImage;
    post['image'] = 'http://localhost:5000/public/imagesPost/' + post.postID + '/' + '1.png';
  });

  console.log(rows)
  res.send({
    posts: rows,
    empty: rows.length === 0
  });
})

router.post('/add', upload.array('postImage', 10), async function (req, res) {
  const maxIndex = await PostModel.maxIndex();
  const postID = maxIndex[0].max + 1;
  const postDes = req.body.postDes;
  const postDetail = req.body.postDetail;
  const postUser = req.body.postUser;
  const postVote = 0;

  let postImage = "./public/imagesPost/" + postID;
  const ret = await PostModel.add({ postID, postDes, postDetail, postUser, postImage });
  res.send(true);
})

router.get('/getComment/:id', async function (req, res) {
  const commentPost = req.params.id;

  let rows = await commentModel.single(commentPost);
  console.log(commentPost)
  console.log('list comment')
  console.log(rows)
  if(rows == null ) {
  }
  else {
    rows.forEach(row => {
      let seconds = Math.round(Math.abs((new Date() - row.commentTime) / (1000)));
      let minutes = 0, hours = 0, days = 0, months = 0, years = 0;
      row.commentTime = seconds + " giây"
      if (seconds >= 60) {
        minutes = Math.round(seconds / 60);
        row.commentTime = minutes + " phút"
      }
      if (minutes >= 60) {
        hours = Math.round(minutes / 60);
        row.commentTime = hours + " giờ"
      }
      if (hours >= 24) {
        days = Math.round(hours / 24);
        row.commentTime = days + " ngày"
      }
      if (days >= 30) {
        months = Math.round(days / 30);
        row.commentTime = months + " tháng"
      }
      if (months >= 12) {
        years = Math.round(months / 12);
        row.commentTime = years + " năm"
      }
    });
  
  }
  //handle time
 
  res.send({
    rows
  });
})

router.post('/del', async function (req, res) {
  const ret = await PostModel.del(req.body);
})

router.post('/patch', async function (req, res) {
  const ret = await PostModel.patch(req.body);
  res.redirect('/users');
})

router.get('/img/:id', async function (req, res) {
  const id = req.params.id;
  const post = await PostModel.single(id);
  if (post === null) {
    return 0;
  }
  const postImageDir = post.postImage;

  var arrayList = [];
  fs.readdir(postImageDir, (err, files) => {
    files.forEach(file => {
      arrayList.push('http://localhost:5000/public/imagesPost/' + id + '/' + file)
    });
    res.status(200).send({
      arrayList
    });
  });
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