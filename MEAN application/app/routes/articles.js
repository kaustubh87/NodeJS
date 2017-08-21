var users = require('../../app/controllers/userController');
var articles = require('../../app/controllers/articleController');

var express = require('express');
var app = express.Router();

app.route('/api/articles')
    .get(articles.list)
    .post(users.requiresLogin, articles.create);