const { deleteOne } = require('../models/post');
const Post = require('../models/post');

module.exports = {
    index,
    new: newPost,
    create,
    delete: deletePost,
    edit,
    update,
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
        res.redirect('/posts')
    });
};

function deletePost(req, res){
    Post.findByIdAndDelete(req.params.id, function(err, deletedPost){
        res.redirect('/posts')
    });
};

function edit(req, res) {
    Post.findById(req.params.id, function(err, post) {
        res.render('/posts/', {post});
    });
};

function update(req, res) {
    Post.findByIdAndUpdate(req.params.id, req.body, function(err, updatedPost){
        res.redirect('/posts');
    });
};

function signOut(req, res) {
    req.session.destroy(function(err){
        delete req.user;
        res.redirect('/posts')
    });
};
