const express = require('express');
const commentModel = require('../models/comment.model');
const UserModel = require('../models/user.model');
const MyDinnerModel =require('../models/mydinner.model');
const PostModel =require('../models/post.model');

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

router.post('', function(req, res) {

})


//Get mydinner 
router.get('/mydiner',async function(req, res){
    console.log('my diner');
    const userName = req.body;
    const x = await MyDinnerModel.all(userName);

    var rows= [];

    for( i=0;i< x.length;i++)
    {
        const y= await PostModel.single(x[i].mydinerPost);
        rows.push(y);
    }

    res.send({
        posts: rows,
        msg: '',
        empty: rows.length === 0
    });
})

//Add to my dinnner
router.post('/addmydiner', async function(req, res){
    const {PostID, userName} = req.body;

    const ret =await MyDinnerModel.single(userName, PostID);

    if( ret ==null)
    {
        MyDinnerModel.add({
            mydinerPost : PostID,
            mydinerUser : userName
        });
        res.send({
            msg: "Ban da them thanh cong"
        })
    }else{
        res.send({
            msg: "Ban da them vao roi"
        })
    }
})

//Remove from my dinner 
router.post('/rmDinner', async function(req, res) {
    console.log('rmmdiner');
    const {postID, userName} = req.body;
    console.log(postID);
    console.log(userName);
    const ret =await MyDinnerModel.single(userName, postID);


    if (ret != null){
        await MyDinnerModel.del(ret);
        console.log(ret);

        const x = await MyDinnerModel.all(userName);

        var rows= [];

        for( i=0;i< x.length;i++)
        {
            const y= await PostModel.single(x[i].mydinerPost);
            rows.push(y);
        }

        console.log(rows);
         res.send({
             posts: rows,
             msg: "Ban da xoa bua thanh cong",
             empty: rows.length === 0
         });
        }else{
         res.send({
             msg: "Khong ton tai"
         });
     }
})

router.post('/add', async function(req, res) {
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
    commentUser: req.body.user,
    commentPost: req.body.commentPost,
    commentContent: req.body.commentContent,
    commentTime: new Date().toISOString().slice(0, 19).replace('T', ' ')
  };

  console.log(data);

  const ret = await commentModel.add(data);
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