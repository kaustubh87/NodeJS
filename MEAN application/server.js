var express = require('express');
var app = express();

app.use('/', function(req,res){
    res.send('Hello World');
});

app.listen(5000, function(req,res){
    console.log('Server running at 5000');
});
