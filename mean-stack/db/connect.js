var MongoClient = require('mongodb').MongoClient;
var assert = require('assert');
var url = "mongodb://localhost:27017/meanstack";


//Inserting documents into database.

var insertDocument = function (db, callback) {
    db.collection("restaurants")
        .insertOne({
            "address": {
                "street": "2 Avenue",
                "zipcode": "10075",
                "building": "1480",
                "coord": [-73.955, 40.772]
            },
            "town": "Manhattan",
            "cuisine": "Italian",
            "name": "Villa",
            "restaurant_id": "41704620"
        }, function (err) {
            assert.equal(err, null);
            console.log('Inserted a document into the restaurants collection');
            callback();
        });
};

//Find Restaurants

var findRestaurants = function (db, callback) {
    db.collection("restaurants")
        .find()
        .toArray(function (err, doc) {
            assert.equal(err, null);
            if (doc != null) {
                console.log(JSON.stringify(doc));
            } else {
                console.log('Calling findRestaurants again');
                callback();
            }
        });
};


MongoClient.connect(url, function (err, db) {

    assert.equal(err, null);
    
    insertDocument(db, function(){
        console.log('Inserting document');
        db.close();
    });

    findRestaurants(db, function(){
        console.log('Finding restaruants');
        db.close();
    });

    process.exit(1);
});