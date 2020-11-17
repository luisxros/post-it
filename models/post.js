const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const postSchema = new Schema({
    body: String
    

}, { timestamps: true});

module.exports = mongoose.model('Post', postSchema);