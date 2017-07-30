var mongoose, schema, user, User;

mongoose = require('mongoose');
schema = require('../models/models');

mongoose.connect('mongodb://localhost:27017/test');

User = mongoose.model("User", schema, "user");

user = new User({
    name: "Kvin",
    email: "kvin1087@gmail.com"
});

user.save(function(err){
    if(err){
        console.log(err);
        process.exit(1);
    }
});