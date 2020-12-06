const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const postSchema = new Schema({
    userID: { type: String, required: true},
    postID: { type: String, required: true},
    postContent: { type: Number, required: true},
    postDay: { type: String, required: true},
    postType: { type: String, required: true},
}, {
    timestamps: true,
});

const PostList = mongoose.model('PostList', postSchema);

module.exports = PostList;