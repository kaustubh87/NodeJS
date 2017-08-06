var mongoose = require('mongoose');

var User = mongoose.model('User');

module.exports.addUser = function(req, res) {



    User.create({
        firstName: req.body.firstName,
        lastName: req.body.lastName,
        email: req.body.email,
        username: req.body.username,
        password: req.body.password
    }, function(err, result) {

        console.log('User added' + result);

    });
};


module.exports.findUsers = function(req, res) {

    User.find({}, function(err, users) {
        res.json(users);
    });
};