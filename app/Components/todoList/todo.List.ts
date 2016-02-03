import {Component, OnInit} from "angular2/core"
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

export class todoList implements OnInit{
    todos = [];
    isShowComplete: boolean = false;
    showCompleteButtonName: string = "Show all";
    
    constructor(private _todoProvider: todoProvider){
        
    }
    
    ngOnInit(){
        this.todos = this._todoProvider.getToDos();
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
        console.log(event.target);
        console.log(todoInput.className);
        if (event.keyCode == 13) {
            if(todoInput.validity.valid === false) {
                return;
            }
            this.saveChanges(todo,todoInput,todoLabel,editForm);
        } else if (event.keyCode == 27) {
            this.cancelUpdate(todo,todoInput,todoLabel,editForm);
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
    
    public toggleStatus(todo : todoItem) {
        todo.status = (todo.status == "completed") ? "started" : "completed";
    }
    
    public toggleShowCompleted(){
        if (this.isShowComplete) {
            this.isShowComplete = false;
            this.showCompleteButtonName = "Show All";
        } else {
           this.isShowComplete = true;
           this.showCompleteButtonName = "Hide Completed"; 
        }
    }
    
}