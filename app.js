//server side code
var express = require('express');
var path = require('path');
var favicon = require('serve-favicon');
var logger = require('morgan');
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');
//var mongoose = require('mongoose');
var app = express();//instantiates express
//var index = require('./routes/index');//brings in the routes/index folder
//app.use('/', index);//this is the router
app.use('/', express.static(path.join(__dirname, 'blog')));//serves static
//files from the blog folder

//var routes = require('./routes/index');//how is this different from index?
//what does it do specifically?
//var users = require('./routes/users');//purpose?

app.use('/resume', express.static('resume'));

//mongoose.connect('mongodb://localhost/personalproject');
//app.get('/', function (req, res) {
//  res.send('GET request to the homepage');
//});




app.use('/blog', express.static(__dirname + '/blog/postone.html'));

// uncomment after placing your favicon in /public
//app.use(favicon(path.join(__dirname, 'public', 'favicon.ico')));
app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

//app.use('/', routes);
//app.use('/users', users);


app.use('/resume', express.static('resume'));

//router.get('/resume', function(req, res, next){
//  res.send('resume',)
//});

//GET home page. */
//deleting to try html homepage
app.get('/', function(req, res, next) {
  res.sendFile(__dirname + '/views/index.html');
});
//res. send is for data

app.use('/home', express.static('home'));
// error handlers

// development error handler
// will print stacktrace
if (app.get('env') === 'development') {
  app.use(function(err, req, res, next) {
    res.status(err.status || 500);
    res.send('error', {
      message: err.message,
      error: err
    });
  });
}

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  var err = new Error('Not Found');
  err.status = 404;
  next(err);
});


// production error handler
// no stacktraces leaked to user
app.use(function(err, req, res, next) {
  res.status(err.status || 500);
  res.send('error', {
    message: err.message,
    error: {}
  });
});




module.exports = app;
