const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const postSchema = new Schema({
    postID: { type: String},
    postContent: { type: String},
}, {
    timestamps: true,
});

const postList = mongoose.model('posts', postSchema);

module.exports = postList;