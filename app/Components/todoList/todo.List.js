System.register(["angular2/core", '../../Models/todoItem/todo.item', "angular2/common"], function(exports_1) {
    var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
        var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
        else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    var __metadata = (this && this.__metadata) || function (k, v) {
        if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
    };
    var core_1, todo_item_1, common_1;
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
            }],
        execute: function() {
            todoList = (function () {
                function todoList() {
                    this.todos = [];
                    this.todos.push(new todo_item_1.todoItem("first todo", "started"));
                    this.todos.push(new todo_item_1.todoItem("second todo", "started"));
                }
                todoList.prototype.editMode = function (todoLabel, todoInput) {
                    todoInput.type = (todoInput.type == "hidden") ? "text" : "hidden";
                    todoLabel.style.display = (todoLabel.style.display == "none") ? "" : "none";
                    console.log(todoLabel);
                    console.log(todoInput);
                    // event.target.contenteditable = true;
                    // console.log(event.target);
                };
                todoList.prototype.finishEdit = function (todo, event, todoLabel, todoInput) {
                    console.log(event);
                    if (event.keyCode == 13) {
                        todo.name = todoInput.value;
                        this.editMode(todoLabel, todoInput);
                    }
                    else if (event.keyCode == 27) {
                        todoInput.value = todo.name;
                        this.editMode(todoLabel, todoInput);
                    }
                };
                todoList = __decorate([
                    core_1.Component({
                        selector: "todo-list",
                        templateUrl: "app/Components/todoList/todo.List.html",
                        styleUrls: ["app/Components/todoList/todo.List.css"],
                        directives: [common_1.NgFor]
                    }), 
                    __metadata('design:paramtypes', [])
                ], todoList);
                return todoList;
            })();
            exports_1("todoList", todoList);
        }
    }
});
//# sourceMappingURL=todo.list.js.map