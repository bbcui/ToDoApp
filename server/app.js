var mongoose = require('mongoose');
var schema = mongoose.Schema;

var todoSchema = new schema({
    id : String,
    name : String,
    status: String
});

var todoModel = mongoose.model("ToDoModel",todoSchema);

module.export = todoModel;