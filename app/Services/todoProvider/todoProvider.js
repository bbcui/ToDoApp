System.register(["angular2/core", "../../Models/todoItem/todo.item"], function(exports_1) {
    var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
        var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
        else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    var __metadata = (this && this.__metadata) || function (k, v) {
        if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
    };
    var core_1, todo_item_1;
    var todoProvider;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (todo_item_1_1) {
                todo_item_1 = todo_item_1_1;
            }],
        execute: function() {
            todoProvider = (function () {
                function todoProvider() {
                    this.todos = Array();
                    this.todos = [
                        new todo_item_1.todoItem("To Do 1", "started"),
                        new todo_item_1.todoItem("To Do 2", "started"),
                        new todo_item_1.todoItem("To Do 3", "completed"),
                        new todo_item_1.todoItem("To Do 4", "started")
                    ];
                }
                todoProvider.prototype.getToDos = function () {
                    return this.todos;
                };
                todoProvider.prototype.addNewTodo = function (newToDo) {
                    this.todos = this.todos.concat([newToDo]);
                };
                todoProvider.prototype.deleteToDo = function (todo) {
                    var index = this.todos.indexOf(todo);
                    this.todos = this.todos.slice(0, index).concat(this.todos.slice(index + 1));
                };
                todoProvider.prototype.clearCompleted = function () {
                    var todos = [];
                    this.todos.forEach(function (todo) {
                        if (todo.status == "started") {
                            todos.push(todo);
                        }
                    });
                    this.todos = todos;
                };
                todoProvider = __decorate([
                    core_1.Injectable(), 
                    __metadata('design:paramtypes', [])
                ], todoProvider);
                return todoProvider;
            })();
            exports_1("todoProvider", todoProvider);
        }
    }
});
//# sourceMappingURL=todoProvider.js.map