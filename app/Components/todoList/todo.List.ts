import {Component, OnInit} from "angular2/core"
import {todoItem} from '../../Models/todoItem/todo.item'
import {NgFor} from "angular2/common"
import {todoProvider} from "../../Services/todoProvider/todoProvider"
import {searchPipe} from "../../Services/searchPipe/search-pipe"
import {HTTP_PROVIDERS}    from 'angular2/http';

@Component({
    selector: "todo-list",
    templateUrl: "app/Components/todoList/todo.List.html",
    styleUrls :["app/Components/todoList/todo.List.css"],
    directives:[NgFor],
    providers: [todoProvider, HTTP_PROVIDERS],
    pipes:[searchPipe]
})

export class todoList implements OnInit{
    hideCompleted: boolean = true;
    showCompleteButtonName: string = "Show all";
    
    constructor(private _todoProvider: todoProvider){
        _todoProvider.getToDos();
    }
    
    ngOnInit(){
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
        //TODO: refactor into todoprovider
        todo.name = todoInput.value;
        this.editMode(editForm, todoLabel,todoInput);
    }
    
    public cancelUpdate(todo, todoInput, todoLabel, editForm) {
        todoInput.value = todo.name;
        this.editMode(editForm, todoLabel,todoInput); 
    }
    
    public addTodo(newTodo){
        if (newTodo.value == "") {
            return;
        }
        this._todoProvider.addNewTodo(new todoItem(newTodo.value));
        newTodo.value = "";
    }
    public deleteToDo(todo :todoItem) {
        this._todoProvider.deleteToDo(todo);
        console.log(todo);
    }
    
    public toggleStatus(todo : todoItem) {
        //TODO:refactor into todoProvider
        this._todoProvider.toggleStatus(todo);
    }
    
    public toggleShowCompleted(){
        if (this.hideCompleted) {
            this.hideCompleted = false;
            this.showCompleteButtonName = "Hide Completed";
        } else {
           this.hideCompleted = true;
           this.showCompleteButtonName = "Show All"; 
        }
    }
    
    public clearCompleted(){
       this._todoProvider.clearCompleted();
    }
}