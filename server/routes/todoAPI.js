var express = require('express');
var router = express.Router();

var mongoose = require('mongoose');
var TodoModel = require('../models/TodoModel');

router.post('/todo', function(req, res, next) {
    TodoModel.create(req.body, function(err, post) {
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
    })
})

router.delete('/todo/:id', function(req, res, next) {
    console.log(req.params.id);
    TodoModel.remove({_id: req.params.id}, function(err) {
        if (err) {
            console.log("error in remove");
            res.sendStatus(404);
        }
        else {
            console.log(req.params.id + " removed");
            res.sendStatus(200);
        }
    })
})

router.put('/todo', function(req, res, next){
    console.log(req.body);
    TodoModel.update({_id: req.body._id}, req.body, function(err, result) {
        if (err) {
            res.send(err);
        } else {
            res.json(result);
        }
    })
})

module.exports = router;