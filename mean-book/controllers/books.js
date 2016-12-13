var mongoose = require('mongoose');
var Book = mongoose.model('Books');

var sendJSONResponse = function(res, status, content){
    res.status(status);
    res.json(content);
}


module.exports.getAllBooks = function(req,res){
    Book.find({}).exec(function(err, results){
       if(err){
           sendJSONResponse(res,400,err);
       } 
        sendJSONResponse(res, 201, results);
    });
};


module.exports.getBookById = function(req,res){
    var id = req.params.id;
    Book.findById(id, function(err, results){
        if(err){
            sendJSONResponse(res, 400, err);
        }
        sendJSONResponse(res, 201, results);
    }); 
};

module.exports.addBook = function(req,res){
     
    Book.create({
        title: req.body.title,
        genre: req.body.genre,
        description: req.body.description,
        author: req.body.author,
        publisher: req.body.publisher,
        imageUrl: req.body.imageUrl,
        buy_url: req.body.buy_url
        
    }, function(err, results){
        if(err)
            {
                throw err;
            }
        sendJSONResponse(res, 201, results);
    });
};

module.exports.updateBook = function(req,res){
    
    Book
    .findById(req.params.id)
    .select('books')
    .exec(
        function(err, book){
           book.title = req.body.title;
          /* book.genre = req.body.genre;
           book.description = req.body.description;
           book.author = req.body.author;
           book.publisher = req.body.publisher;
           book.imageUrl = req.body.imageUrl;
           book.buy_url = req.body.buy_url;
           */
           book.save(function(err, book){
             if(err)
                 {
                     throw err;
                 }
            sendJSONResponse(res, 201, book);
           });
        });  
};


module.exports.deleteBook = function(req,res){
    
    Book
    .findByIdAndRemove(req.params.id)
    .exec(
        function(err, book){
          if(err)
              {
                  throw err;
              }
            sendJSONResponse(res, 201, book);
        });  
};