import {Component} from "angular2/core"
import {todoItem} from '../../Models/todoItem/todo.item'
import {NgFor} from "angular2/common"

@Component({
    selector: "todo-list",
    templateUrl: "app/Components/todoList/todo.List.html",
    styleUrls :["app/Components/todoList/todo.List.css"],
    directives:[NgFor]
})

export class todoList{
    todos = [];
    constructor(){
        this.todos.push(new todoItem("first todo","started"));
        this.todos.push(new todoItem("second todo","started"));
    }
    
    public editMode(todoLabel,todoInput){
        todoInput.type = (todoInput.type == "hidden") ? "text" : "hidden";
        todoLabel.style.display = (todoLabel.style.display == "none") ? "" : "none";
        console.log(todoLabel);
        console.log(todoInput);
        // event.target.contenteditable = true;
        // console.log(event.target);
    }
   
    public finishEdit(todo, event, todoLabel, todoInput) {
        console.log(event);
        if (event.keyCode == 13) {
            todo.name = todoInput.value;
            this.editMode(todoLabel, todoInput);
        } else if (event.keyCode == 27) {
            todoInput.value = todo.name;
            this.editMode(todoLabel, todoInput);      
        }
    }
}