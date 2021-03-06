System.register(["angular2/core", '../../Models/todoItem/todo.item', "angular2/common", "../../Services/todoProvider/todoProvider", "../../Services/searchPipe/search-pipe"], function(exports_1) {
    var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
        var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
        else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    var __metadata = (this && this.__metadata) || function (k, v) {
        if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
    };
    var core_1, todo_item_1, common_1, todoProvider_1, search_pipe_1;
    var todoList;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (todo_item_1_1) {
                todo_item_1 = todo_item_1_1;
            },
            function (common_1_1) {
                common_1 = common_1_1;
            },
            function (todoProvider_1_1) {
                todoProvider_1 = todoProvider_1_1;
            },
            function (search_pipe_1_1) {
                search_pipe_1 = search_pipe_1_1;
            }],
        execute: function() {
            todoList = (function () {
                function todoList(_todoProvider) {
                    this._todoProvider = _todoProvider;
                    this.hideCompleted = true;
                    this.showCompleteButtonName = "Show all";
                }
                todoList.prototype.ngOnInit = function () {
                };
                todoList.prototype.editMode = function (editForm, todoLabel, todoInput) {
                    editForm.style.display = (editForm.style.display == "") ? "inline" : "";
                    todoLabel.style.display = (todoLabel.style.display == "none") ? "" : "none";
                    // event.target.contenteditable = true;
                    // console.log(event.target);
                    if (editForm.style.display != "") {
                        todoInput.focus();
                    }
                };
                todoList.prototype.finishEdit = function (todo, event, editForm, todoLabel, todoInput) {
                    if (event.keyCode == 13) {
                        if (todoInput.validity.valid === false) {
                            return;
                        }
                        this.saveChanges(todo, todoInput, todoLabel, editForm);
                    }
                    else if (event.keyCode == 27) {
                        this.cancelUpdate(todo, todoInput, todoLabel, editForm);
                    }
                };
                todoList.prototype.saveChanges = function (todo, todoInput, todoLabel, editForm) {
                    //TODO: refactor into todoprovider
                    todo.name = todoInput.value;
                    this.editMode(editForm, todoLabel, todoInput);
                };
                todoList.prototype.cancelUpdate = function (todo, todoInput, todoLabel, editForm) {
                    todoInput.value = todo.name;
                    this.editMode(editForm, todoLabel, todoInput);
                };
                todoList.prototype.addTodo = function (newTodo) {
                    if (newTodo.value == "") {
                        return;
                    }
                    this._todoProvider.addNewTodo(new todo_item_1.todoItem(newTodo.value));
                    newTodo.value = "";
                };
                todoList.prototype.deleteToDo = function (todo) {
                    this._todoProvider.deleteToDo(todo);
                };
                todoList.prototype.toggleStatus = function (todo) {
                    //TODO:refactor into todoProvider
                    todo.status = (todo.status == "completed") ? "started" : "completed";
                };
                todoList.prototype.toggleShowCompleted = function () {
                    if (this.hideCompleted) {
                        this.hideCompleted = false;
                        this.showCompleteButtonName = "Hide Completed";
                    }
                    else {
                        this.hideCompleted = true;
                        this.showCompleteButtonName = "Show All";
                    }
                };
                todoList.prototype.clearCompleted = function () {
                    this._todoProvider.clearCompleted();
                };
                todoList = __decorate([
                    core_1.Component({
                        selector: "todo-list",
                        templateUrl: "app/Components/todoList/todo.List.html",
                        styleUrls: ["app/Components/todoList/todo.List.css"],
                        directives: [common_1.NgFor],
                        providers: [todoProvider_1.todoProvider],
                        pipes: [search_pipe_1.searchPipe]
                    }), 
                    __metadata('design:paramtypes', [todoProvider_1.todoProvider])
                ], todoList);
                return todoList;
            })();
            exports_1("todoList", todoList);
        }
    }
});
//# sourceMappingURL=todo.list.js.map