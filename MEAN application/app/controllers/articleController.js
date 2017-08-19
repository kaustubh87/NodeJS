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

module.exports.list = function(req, res) {
    Article.find().sort('-created').populate('creator', 'firstName lastName fullName').exec(function(err, articles) {
        if (err) {
            return err;
        } else {
            res.json(articles);
        }
    });
};

module.exports.articleById = function(req, res) {
    Article.findById(id).populate('creator', 'firstName lastName fullName').exec(function(err, article) {
        if (err) return next(err);
        req.article = article;
    });
};

module.exports.read = function(req, res) {
    res.json(req.article);
};

module.exports.update = function(req, res) {
    var article = req.article;

    article.title = req.body.title;
    article.content = req.body.content;

    article.save(function(err) {
        if (err) {
            return err;
        } else {
            res.json(article);
        }
    });
};