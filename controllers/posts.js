// const Post = require('../models/post');

module.exports = {
    index,
    signOut
};

function index(req, res){
    res.render('posts/index');
};

function signOut(req, res) {
    req.session.destroy(function(err){
        delete req.user;
        res.redirect('/')
    });
};