var express = require('express');
var router = express.Router();

//router.use('/resume', express.static('resume'));
//
////router.get('/resume', function(req, res, next){
////  res.send('resume',)
////});
//
// //GET home page. */
////deleting to try html homepage
//router.get('/', function(req, res, next) {
//  res.sendFile(__dirname + '/../views/index.html');
//});
////res. send is for data
//
//router.use('/home', express.static('home'));


//router.get('/blog', function(req, res, next){
//  res.sendFile(path.join(_dirname, '../blog/postone.html'));
//});

module.exports = router;

//everything in routes directory configures express. tell server that when
//someone makes a request for /users that is the code that runs