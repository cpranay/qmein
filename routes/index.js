var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'QmeIn' });
});

/* GET user-register page. */
router.get('/user-register', function(req, res){
  res.render('user-register', {
    title: 'User Registration'
  });
});

/* GET merchant-register page. */
router.get('/merchant-register', function(req, res){
  res.render('merchant-register', {
    title: 'Merchant Registration'
  });
});

/* GET userList page. */
router.get('/userlist', function(req, res) {
    var db = req.db;
    var collection = db.get('usercollection');
    collection.find({},{},function(e,docs){
        res.render('userlist', {
            "userlist" : docs
        });
    });
});

/* GET merchantList page. */
router.get('/merchantlist', function(req, res) {
    var db = req.db;
    var collection = db.get('merchantcollection');
    collection.find({},{},function(e,docs){
        res.render('merchantlist', {
            "merchantlist" : docs
        });
    });
});

/* GET loggedinuser page. */
router.get('/loggedinuser', function(req, res, next) {
  res.render('loggedinuser', { title: 'QmeIn' });
});

/* POST to Add User Service */
router.post('/adduser', function(req, res) {

    // Set our internal DB variable
    var db = req.db;

    // Get our form values. These rely on the "name" attributes
    var userName = req.body.username;
    var userEmail = req.body.useremail;
	var userPassword = req.body.userpassword;

    // Set our collection
    var collection = db.get('usercollection');

    // Submit to the DB
    collection.insert({
        "name" : userName,
        "email" : userEmail,
		"password" : userPassword
    }, function (err, doc) {
        if (err) {
            // If it failed, return error
            res.send("There was a problem adding the information to the database.");
        }
        else {
            // And forward to success page
            res.redirect("loggedinuser");
        }
    });
});

/* POST to Add Merchant Service */
router.post('/addmerchant', function(req, res) {

    // Set our internal DB variable
    var db = req.db;

    // Get our form values. These rely on the "name" attributes
    var merchantName = req.body.merchantname;
    var merchantEmail = req.body.merchantemail;
	var merchantPassword = req.body.merchantpassword;

    // Set our collection
    var collection = db.get('merchantcollection');

    // Submit to the DB
    collection.insert({
        "name" : merchantName,
        "email" : merchantEmail,
		"password" : merchantPassword
    }, function (err, doc) {
        if (err) {
            // If it failed, return error
            res.send("There was a problem adding the information to the database.");
        }
        else {
            // And forward to success page
            res.redirect("merchantlist");
        }
    });
});

/* POST to Queue */
router.post('/addtoqueue', function(req, res) {

    // Set our internal DB variable
    var db = req.db;

    // Get our form values. These rely on the "name" attributes
    var userName = req.body.username;
    var userEmail = req.body.useremail;
	var userPassword = req.body.userpassword;

    // Set our collection
    var collection = db.get('usercollection');

    // Submit to the DB
    collection.insert({
        "name" : userName,
        "email" : userEmail,
		"password" : userPassword
    }, function (err, doc) {
        if (err) {
            // If it failed, return error
            res.send("There was a problem adding the information to the database.");
        }
        else {
            // And forward to success page
            res.redirect("loggedinuser");
        }
    });
});

module.exports = router;
