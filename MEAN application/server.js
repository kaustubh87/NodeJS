var express = require('express');
var morgan = require('morgan');
//compression provides response compression
var compress = require('compression');
var bodyParser = require('body-parser');
//method override provides DELETE and PUT HTTP verbs legacy support
var methodOverride = require('method-override');

process.env.NODE_ENV = process.env.NODE_ENV || 'development';

var app = express();

if(process.env.NODE_ENV === 'development'){
    app.use(morgan('dev'));
} else if(process.env.NODE_ENV === 'production'){
    app.use(compress());
}

app.use(bodyParser.urlencoded({
    extended : true
}));

app.use(bodyParser.json());
app.use(methodOverride());

app.use('/', function(req,res){
    res.send('Hello World');
});

app.listen(5000, function(req,res){
    console.log('Server running at 5000');
});
