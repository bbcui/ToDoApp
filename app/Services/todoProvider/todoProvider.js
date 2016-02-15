System.register(["angular2/core"], function(exports_1) {
    var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
        var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
        else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    var __metadata = (this && this.__metadata) || function (k, v) {
        if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
    };
    var core_1;
    var todoProvider;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            }],
        execute: function() {
            todoProvider = (function () {
                function todoProvider() {
                    this.todos = Array();
                    this.todo = this.initToDoList();
                    // this.todos = [
                    //  new todoItem("To Do 1", "started"),  
                    //  new todoItem("To Do 2", "started"),
                    //  new todoItem("To Do 3", "completed"),
                    //  new todoItem("To Do 4", "started")
                    // ];
                    this.dataRef = new Firebase('https://bcui.firebaseio.com/todo');
                    // this.todos.forEach(element => {
                    //     this.dataRef.set(element);
                    // });
                    //this.todos = this.initToDoList();
                }
                todoProvider.prototype.getToDos = function () {
                    return this.todos;
                };
                todoProvider.prototype.newgetToDos = function () {
                    this.initToDoList().then(function (snap) {
                        console.log("fff");
                    });
                };
                todoProvider.prototype.initToDoList = function () {
                    var _this = this;
                    return new Promise(function (resolve, reject) {
                        _this.dataRef.once('value', function (snapshot) {
                            resolve(snapshot);
                        });
                    });
                };
                todoProvider.prototype.test = function (input) {
                };
                todoProvider.prototype.addNewTodo = function (newToDo) {
                    this.todos = this.todos.concat([newToDo]);
                    //this.dataRef.push(newToDo);
                    console.log(this.dataRef);
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