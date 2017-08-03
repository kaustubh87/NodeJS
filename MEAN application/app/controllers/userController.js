var mongoose = require('mongoose');

var User = mongoose.model('User');

module.exports.addUser = function(req,res){

        User.create({
            firstName: req.body.firstName,
            lastName: req.body.lastName,
            email: req.body.email,
            username: req.body.username,
            password: req.body.password
        }, function(err, result){
            if(err){
                throw err;
            }
            else{
            console.log('User added' +result);
            }
        });
};

