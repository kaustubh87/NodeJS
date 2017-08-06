var express = require('express');
var app = express();
var path = require('path');
var bodyParser = require('body-parser');
var mongoose = require('mongoose');
require('./app/models/User');



app.use(express.static(__dirname + '/public'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

app.set('views', './app/views');
app.set('view engine', 'ejs');

var routes = require('./app/routes/User');

app.use('/api', routes);

// Connect to mongoose

mongoose.connect('mongodb://localhost/book-data', function(err) {
    if (err) {
        console.log(err);
    } else {
        console.log('db connected');
    }

});

var port = process.env.PORT || 3110;
app.listen(port, function() {
    console.log('Starting server at ' + port);
});