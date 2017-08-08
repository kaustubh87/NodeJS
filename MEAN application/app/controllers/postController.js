var mongoose = require('mongoose');

var User = mongoose.model('User');
var Post = mongoose.model('Posts');

module.exports.addPost = function(req, res) {

    var user = new User();
    user.save();

    var post = new Post();
    post.title = req.body.title;
    post.content = req.body.content;
    post.author = user;
    post.save();
    //console.log('Post Saved');
};