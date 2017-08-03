var express = require('express');
var router = express.Router();

var users = require('../controllers/userController');

router.post('/users', users.addUser);
router.get('/users', function(req,res){
    res.render('index', {
        title : "API Index Page"
    });
});

module.exports = router;