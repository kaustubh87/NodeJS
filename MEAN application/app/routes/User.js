var express = require('express');
var router = express.Router();

var users = require('../controllers/userController');
var posts = require('../controllers/postController');


router.post('/users', users.addUser);
router.get('/users', function(req, res) {
    res.render('index', {
        title: "API Index Page"
    });
});

router.get('/users/list', users.findUsers);

router.get('/users/:id', users.findUsersById);

router.put('/users/:id', users.updateUser);

router.delete('/users/:id', users.deleteUser);

router.get('/posts', posts.getPost);

router.post('/posts/add', posts.addPost);

module.exports = router;