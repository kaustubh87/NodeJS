var mongoose = require('mongoose');

var User = mongoose.model('User');
var passport = require('passport');



module.exports.renderSignin = function(req, res, next) {
    if (!req.user) {
        res.render('signin', {
            title: 'Sign-in form'
        });
    } else {
        return res.redirect('/');
    }
};

module.exports.renderSignup = function(req, res, next) {
    if (!req.user) {
        res.render('signup', {
            title: 'Sign-up form'
        });
    } else {
        return res.redirect('/');
    }
};

module.exports.signup = function(req, res, next) {
    if (!req.user) {
        var user = new User(req.body);
        user.provider = 'local';
        user.save(function(err) {
            if (err) {
                return res.redirect('/signup');
            }

            req.login(user, function(err) {
                if (err)
                    return next(err);
                return res.redirect('/');
            });
        });
    } else {
        return res.redirect('/');
    }
};

module.exports.signout = function(req, res) {
    req.logout();
    res.redirect('/');
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

module.exports.render = function(req, res) {
    res.render('index', {
        title: 'Hello World',
        user: JSON.stringify(req.user);
    });
};