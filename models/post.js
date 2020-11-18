const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const commentSchema = new Schema({
    content: String,

}, {timestamps: true });

const postSchema = new Schema({
    body: String,
    
    comments:[commentSchema]
    

}, { timestamps: true});

module.exports = mongoose.model('Post', postSchema);