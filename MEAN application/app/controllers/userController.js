var mongoose = require('mongoose');

var User = mongoose.model('User');
var passport = require('passport');

var getErrorMessage = function(err) {
    var message = '';

    if (err.code) {
        switch (err.code) {
            case 11000:
            case 11001:
                message = 'Username already exists';
                break;
            default:
                message = 'Something went wrong';
        }
    } else {
        for (var errName in err.errors) {
            if (err.errors[errName].message) message = err.errors[errName].message;
        }
    }

    return message;
};

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

module.exports.findUsersById = function(req, res) {

    var param = req.params.id;
    console.log(param);

};

module.exports.updateUser = function(req, res) {

    User.findByIdAndUpdate(req.params.id, req.body, function(err, user) {
        res.json(user);
    });
};

module.exports.deleteUser = function(req, res) {

    User.findByIdAndRemove(req.params.id, req.body, function(err, user) {
        res.json({
            message: 'User Deleted'
        });
    });
};