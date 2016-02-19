var express = require('express');
var router = express.Router();

var mongoose = require('mongoose');
var TodoModel = require('../models/TodoModel');

router.post('/todo', function(req, res, next) {
    var todo = new TodoModel({name:"halo", status: "completed"})
    TodoModel.create(todo, function(err, post) {
        if (err) {
            next(err);
        } else {
            res.json(post);
        }
    }) 
})

router.get('/todos', function(req, res, next) {
    TodoModel.find({},function(err, post) {
        if (err) {
            next(err);
        }
        res.json(post);
        res.write("asdfsadf");
    })
})

module.exports = router;