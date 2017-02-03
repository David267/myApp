var express = require('express');
var router = express.Router();
var mongodb = require('mongodb');
var assert = require('assert');

var MongoClient = mongodb.MongoClient;
var url = 'mongodb://localhost:27017/users';

router.get('/', function(req, res, next) {

    var insertDocument = function(db, callback) {
        db.collection('users').find({}).toArray(
            function(err, result) {
                assert.equal(err, null);
                callback();
                res.render('bodys/users', {
                    "users": result
                });
            }
        );
    };

    MongoClient.connect(url, function(err, db) {
        assert.equal(null, err);
        insertDocument(db, function() {
            db.close();
        });
    });

});

module.exports = router;
