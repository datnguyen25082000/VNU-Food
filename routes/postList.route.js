const router = require('express').Router();
let postList = require('../models/post.model');

router.route('/').get((req, res) => {
    postList.find()
        .then(posts => {
            res.json(posts)
        })
        .catch(err => res.status(400).json('Error; ' + err));
});


router.post('/add', async function (req, res) {
    const postID = req.body.postID;
    const postContent = req.body.postContent;

    const newPost = new postList({ postID, postContent });

    newPost.save();
})

module.exports = router;