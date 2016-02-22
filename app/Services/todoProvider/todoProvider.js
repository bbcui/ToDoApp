System.register(["angular2/core", 'angular2/http', 'rxjs/Rx'], function(exports_1) {
    var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
        var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
        else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    var __metadata = (this && this.__metadata) || function (k, v) {
        if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
    };
    var core_1, http_1;
    var todoProvider;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (http_1_1) {
                http_1 = http_1_1;
            },
            function (_1) {}],
        execute: function() {
            todoProvider = (function () {
                function todoProvider(http) {
                    this.todos = Array();
                    this.headers = new http_1.Headers();
                    this.todoUrl = "/api/todos";
                    this._http = http;
                    this.headers.append('content-type', "application/json;charset=UTF-8");
                }
                todoProvider.prototype.getToDos = function () {
                    var _this = this;
                    this._http.get(this.todoUrl).map(function (res) { return res.json(); })
                        .subscribe(function (todos) { return _this.todos = todos; });
                    return this.todos;
                };
                todoProvider.prototype.addNewTodo = function (newToDo) {
                    var _this = this;
                    console.log(newToDo);
                    this._http.post('/api/todo', JSON.stringify(newToDo), { headers: this.headers }).map(function (response) { return response.json(); }).subscribe(function (data) {
                        newToDo._id = data._id;
                        _this.todos = _this.todos.concat([newToDo]);
                        console.log(newToDo);
                    }, function (error) { return console.log('Could not load todos.'); });
                };
                todoProvider.prototype.deleteToDo = function (todo) {
                    var _this = this;
                    this._http.delete('/api/todo/' + todo._id).subscribe(function (response) {
                        var index = _this.todos.indexOf(todo);
                        _this.todos = _this.todos.slice(0, index).concat(_this.todos.slice(index + 1));
                    }, function (err) { return console.log("Error in deleting."); });
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
                todoProvider.prototype.toggleStatus = function (todo) {
                    var newTodo = Object.assign(todo);
                    newTodo.status = (todo.status == "completed") ? "started" : "completed";
                    this.updateCurrent(todo, newTodo);
                };
                todoProvider.prototype.editName = function (todo, newName) {
                    var newTodo = Object.assign(todo);
                    newTodo.name = newName;
                    this.updateCurrent(todo, newTodo);
                    console.log(newTodo);
                };
                todoProvider.prototype.updateCurrent = function (oldTodo, newTodo) {
                    var _this = this;
                    this._http.put('/api/todo', JSON.stringify(newTodo), { headers: this.headers }).map(function (res) { return res.json; }).subscribe(function (data) {
                        var index = _this.todos.indexOf(oldTodo);
                        _this.todos = _this.todos.slice(0, index).concat([
                            newTodo
                        ], _this.todos.slice(index + 1));
                    }, function (err) { return console.log("error updating."); });
                };
                todoProvider = __decorate([
                    core_1.Injectable(), 
                    __metadata('design:paramtypes', [http_1.Http])
                ], todoProvider);
                return todoProvider;
            })();
            exports_1("todoProvider", todoProvider);
        }
    }
});
//# sourceMappingURL=todoProvider.js.map