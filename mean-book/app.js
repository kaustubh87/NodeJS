var express = require('express');
var app = express();
var path = require('path');
var bodyParser = require('body-parser');
var mongoose = require('mongoose');
require('./models/genre.js');
require('./models/book');


app.use(express.static(__dirname+'/public'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

var routes = require('./routes/index');

app.use('/api', routes);

// Connect to mongoose

mongoose.connect('mongodb://localhost/bookstore', function(err){
    if(err)
        {
            console.log(err);
        }
    else{
        console.log('db connected');
    }
    
});

var port = process.env.PORT || 3110;
app.listen(port, function(){
    console.log('Starting server at ' +port);
});
