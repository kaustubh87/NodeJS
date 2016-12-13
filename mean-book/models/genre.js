var mongoose = require('mongoose');

//Create Schema for genres

var genreSchema = mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    create_date: {
        type: Date,
        default: Date.now
    }
});


mongoose.model('Genre', genreSchema);

