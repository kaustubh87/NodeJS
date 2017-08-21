var users = require('../../app/controllers/userController');
var articles = require('../../app/controllers/articleController');

var express = require('express');
var app = express.Router();

app.route('/api/articles')
    .get(articles.list)
    .post(users.requiresLogin, articles.create);

app.route('/api/articles/:articleId')
    .get(articles.read)
    .put(users.requiresLogin, articles.hasAuthorization, articles.update)
    .delete(users.requiresLogin, articles.hasAuthorization, articles.delete);