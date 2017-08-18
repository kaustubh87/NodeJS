var mongoose = require('mongoose');
var Article = mongoose.model('Article');

module.exports.create = function(req, res) {
    var article = new Article(req.body);
    article.creator = req.user;
    article.save(function(err) {
        if (err) {
            throw err;
        } else {
            res.json(article);
        }
    });
};