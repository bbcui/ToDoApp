var mongoose = require('mongoose');

var todoSchema = new mongoose.Schema({
    id : String,
    name : String,
    status: String
});

var todoModel = mongoose.model("ToDoModel",todoSchema);

module.exports = todoModel;