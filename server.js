var express = require('express');
var path = require('path');
var logger = require('morgan');
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');
var mongoose = require('mongoose');

var index = require('./server/routes/index');
var todos = require('./server/routes/todoAPI');

var app = express();
 
mongoose.connect('mongodb://bcui:123qwe@ds062438.mongolab.com:62438/bcui', function(err){
    if(err) {
        console.log("error occured", err);
    } else {
        console.log("connected to DB");
    }
})

// view engine setup
app.set('views', __dirname);
app.set('view engine', 'ejs');
app.engine('html', require('ejs').renderFile);
app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
    extended: false
}));
app.use(cookieParser());
app.use(express.static(__dirname));

app.use('/', index);
app.use('/api/', todos)
 
// catch 404 and forward to error handler
app.use(function(req, res, next) {
    var err = new Error('Not Found');
    err.status = 404;
    next(err);
});
 
process.on('SIGINT', function () {
  console.log("Closing");
  app.close();
});
 
app.on('close', function(){
    mongoose.disconnect();
    console.log("disconnected.")
});

var server = app.listen(3000, function() {
    var host = 'localhost';
    var port = server.address().port;
    console.log('App listening at http://%s:%s', host, port);
});

module.exports = app;