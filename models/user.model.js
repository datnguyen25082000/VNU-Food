const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const userSchema = new Schema({
    username: {
        type: String,
        required: true,
        unique: true,
        trim: true,
        minlength: 3
    },
    password: {type: String, required: true},
    userType: {type: String, required: true},
    displayName: {type: String, required: true},
    email: {type: String},
}, {
    timestamps: true,
});

const User = mongoose.model('users', userSchema);

module.exports = User;