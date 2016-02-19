var express = require('express');
var path = require('path');
var logger = require('morgan');
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');
var mongoose = require('mongoose');
var todoModel = require('./server/app.js')

var index = require('./server/routes/index');
//var todos = require('./routes/todos');

// mongoose.connect('mongodb://bcui:123qwe@ds062438.mongolab.com:62438/bcui', function(err){
//     if(err) {
//         console.log("error occured", err);
//     } else {
//         console.log("connected to DB");
//     }
// })
 
var app = express();
 
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
//app.use('/api/v1/', todos);
 
// catch 404 and forward to error handler
app.use(function(req, res, next) {
    var err = new Error('Not Found');
    err.status = 404;
    next(err);
});
 
var server = app.listen(3000, function() {
    var host = 'localhost';
    var port = server.address().port;
    console.log('App listening at http://%s:%s', host, port);
});
 
module.exports = app;