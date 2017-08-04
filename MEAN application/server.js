var express = require('express');
var bodyParser = require('body-parser');
//method override provides DELETE and PUT HTTP verbs legacy support
var config = require('./config');
var session = require('express-session');
var mongoose = require('mongoose');
var uri = "mongodb://localhost/mean-book";
require('./app/models/User');
var userRoutes = require('./app/routes/User');


process.env.NODE_ENV = process.env.NODE_ENV || 'development';

var app = express();

app.use(express.static(__dirname + '/public'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

app.use(session({
    saveUninitialized: true,
    resave: true,
    secret: config.sessionSecret
}));

app.set('views', './app/views');
app.set('view engine', 'ejs');

app.use('/api', userRoutes);

app.use('/index', function(req, res) {
    if (req.session.lastVisit) {
        console.log(req.session.lastVisit);
    }

    req.session.lastVisit = new Date();
    res.render('index', {
        title: 'Hello World'
    });
});

mongoose.connect('uri', function() {
    console.log('Database connected');
});

app.listen(5000, function(req, res) {
    console.log('Server running at 5000');
});

app.use(express.static('./public'));