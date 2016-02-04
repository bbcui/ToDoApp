/**
 * Created by bcui on 2/1/16.
 */
import {Injectable} from "angular2/core"
import {todoItem} from "../../Models/todoItem/todo.item"

@Injectable()

export class todoProvider{
    todos = Array<todoItem>();
    
    public getToDos() {
        return this.todos;
    }
    
    constructor(){
        this.todos = [
         new todoItem("To Do 1", "started"),  
         new todoItem("To Do 2", "started"),
         new todoItem("To Do 3", "completed"),
         new todoItem("To Do 4", "started")
        ];
    }
    public addNewTodo(newToDo : todoItem){
        this.todos = [...this.todos, newToDo];
    }
    
    public deleteToDo(todo :todoItem) {
        let index = this.todos.indexOf(todo);
        this.todos = [
            ...this.todos.slice(0,index),
            ...this.todos.slice(index+1)
        ];
    } 
    
    public clearCompleted(){
        let todos = [];
        this.todos.forEach(todo => {
            if (todo.status == "started") {
                todos.push(todo);
            }
        });
        this.todos = todos;
    }
}

