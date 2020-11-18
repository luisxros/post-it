const User = require('../models/user');
const bcrypt = require('bcrypt');
const SALT_ROUNDS = 10;

module.exports = {
    new: newUser,
    signUp,
    signIn,
    signOut,
    login,
    
};

function newUser(req, res) {
    res.render('users/new');
};

function signUp(req, res){
    req.body.password = bcrypt.hashSync(req.body.password, bcrypt.genSaltSync(SALT_ROUNDS));
    User.create(req.body, function (err, newUser){
        console.log(newUser)
        res.redirect('/users/signin');
    });
};

function signIn(req, res) {
    res.render('users/login');
};

function signOut(req, res) {
    req.session.destroy(function(err){
        delete req.user;
        res.redirect('/')
    });
};


function login(req, res) {
    User.findOne({
        username: req.body.username
    }, function (err, foundUser){
        if (foundUser === null) {
            res.redirect('/users/signin');
        } else {
            const doesPasswordMatch = bcrypt.compareSync(req.body.password, foundUser.password);
            if (doesPasswordMatch) {
                req.session.userId = foundUser._id;
                console.log(req.session)
                res.redirect('/posts');
            } else {
                res.redirect('/users/signin');
            }
        }
    });
}

