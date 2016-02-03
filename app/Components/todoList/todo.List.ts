import {Component} from "angular2/core"
import {todoItem} from '../../Models/todoItem/todo.item'
import {NgFor} from "angular2/common"
import {todoProvider} from "../../Services/todoProvider"

@Component({
    selector: "todo-list",
    templateUrl: "app/Components/todoList/todo.List.html",
    styleUrls :["app/Components/todoList/todo.List.css"],
    directives:[NgFor],
    providers: [todoProvider] 
})

export class todoList{
    todos = [];
    constructor( _todoProvider: todoProvider){
        this.todos = _todoProvider.getToDos();
        //this.todos.push(new todoItem("first todo","started"));
        //this.todos.push(new todoItem("second todo","started"));
    }
    
    public editMode(editForm,todoLabel,todoInput){
        editForm.style.display = (editForm.style.display == "") ? "inline" : "";
        todoLabel.style.display = (todoLabel.style.display == "none") ? "" : "none";
        // event.target.contenteditable = true;
        // console.log(event.target);
        if(editForm.style.display != "") {
            todoInput.focus();
        }
    }
   
    public finishEdit(todo, event, editForm, todoLabel, todoInput) {
        console.log(event);
        if (event.keyCode == 13) {
            todo.name = todoInput.value;
            this.editMode(editForm, todoLabel,todoInput);
        } else if (event.keyCode == 27) {
            todoInput.value = todo.name;
            this.editMode(editForm, todoLabel,todoInput);      
        }
    }
    
    public saveChanges(todo, todoInput, todoLabel, editForm){
        todo.name = todoInput.value;
        this.editMode(editForm, todoLabel,todoInput);
    }
    
    public cancelUpdate(todo, todoInput, todoLabel, editForm) {
        todoInput.value = todo.name;
        this.editMode(editForm, todoLabel,todoInput); 
    }
    
    public addTodo(newTodo){
        this.todos.push(new todoItem(newTodo.value));
        newTodo.value = "";
        
    }
    public deleteToDo(todo :todoItem) {
        let index = this.todos.indexOf(todo);
        this.todos = [
            ...this.todos.slice(0,index),
            ...this.todos.slice(index+1)
        ];
    }
}