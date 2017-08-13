var express = require('express');
var router = express.Router();
var passport = require('passport');

var users = require('../controllers/userController');
var posts = require('../controllers/postController');


router.post('/users', users.addUser);
router.get('/users', function(req, res) {
    res.render('index', {
        title: "API Index Page"
    });
});

router.get('/users/list', users.findUsers);

router.get('/users/find', users.findUsers);

router.get('/users/:id', users.findUsersById);

router.put('/users/:id', users.updateUser);

router.delete('/users/:id', users.deleteUser);

router.get('/posts', posts.getPost);

router.post('/posts/add', posts.addPost);

router.get('/signup', users.renderSignup);

router.post('/signup', users.signup);

router.get('/signin', users.renderSignin);

router.post('/signin', passport.authenticate('local', {
    successRedirect: '/',
    failureRedirect: '/signin'
}));

router.get('/signout', users.signout);

module.exports = router;