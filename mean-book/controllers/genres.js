var mongoose = require('mongoose');
var Genre = mongoose.model('Genre');

var sendJSONResponse = function(res, status, content){
    res.status(status);
    res.json(content);
}


module.exports.getAllGenres = function(req,res){
    Genre.find({}).exec(function(err, results){
       if(err){
           throw err;
       }
        sendJSONResponse(res,201,results);
    });
};


module.exports.addGenre = function(req,res){
   
    var title = req.body;
    
    Genre.create(title, function(err, results){
       if(err)
           {
               throw err;
           }
        sendJSONResponse(res, 201, results);
    });
    
};


module.exports.updateGenre = function(req,res){
    
    Genre
    .findById(req.params.id)
    .select('genres')
    .exec(
    function(err, genre){
        genre.name = req.body.name;
        genre.save(function(err, genre){
            if(err){
                throw err;
            }
            sendJSONResponse(res, 201, genre);
        });
    }
    );  
};


module.exports.deleteGenre = function(req,res){
    
    Genre
    .findByIdAndRemove(req.params.id)
    .exec(function(err, result){
        if(err)
            {
                throw err;
            }
        sendJSONResponse(res, 201, result);
        
    });  
};