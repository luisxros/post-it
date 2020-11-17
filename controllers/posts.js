const Post = require('../models/post');

module.exports = {
    index,
    new: newPost,
    create,
    signOut
};

function index(req, res){
    Post.find({}, function(err, posts){
        res.render('posts/index', {posts})
    });
};

function newPost(req, res){
    res.render('/posts');
};

function create(req, res){
    Post.create(req.body, function(err, post){
        res.render('/posts')
    });
};


function signOut(req, res) {
    req.session.destroy(function(err){
        delete req.user;
        res.redirect('/')
    });
};

