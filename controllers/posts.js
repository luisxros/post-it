// const Post = require('../models/post');

module.exports = {
    new: newPost
};

function newPost(req, res){
    res.render('posts/post');
}