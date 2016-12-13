var mongoose = require('mongoose');

//Create Schema for genres
var bookSchema = mongoose.Schema({
        title: {
            type: String,
            required: true
        },
        genre: {
            type: String,
            required: true
        },
        description: {
            type: String
        },
        author: {
            type: String
        },
        publisher:{
            type: String
        },
        pages: {
            type:String
        },
        image_url: {
            type: String
        },
        buy_url: {
            type: String
        },                            
        create_date: {
            type: Date,
            default: Date.now
        }
    });


mongoose.model('Books', bookSchema);

