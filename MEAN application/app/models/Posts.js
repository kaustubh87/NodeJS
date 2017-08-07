var mongoose = require('mongoose');

var PostSchema = mongoose.Schema({

    title: {
        type: String,
        required: true
    },
    content: {
        type: String,
        required: true
    },
    author: {
        type: Schema.ObjectId,
        ref: 'User'
    }
});

mongoose.model('Posts', PostSchema);