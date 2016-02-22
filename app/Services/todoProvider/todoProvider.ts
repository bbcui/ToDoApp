/**
 * Created by bcui on 2/1/16.
 */
import {Injectable} from "angular2/core"
import {Http, Response,Headers} from 'angular2/http';
import {todoItem} from "../../Models/todoItem/todo.item"
import 'rxjs/Rx';

@Injectable()

export class todoProvider{
    todos = Array<todoItem>();
    private _http : Http;
    headers = new Headers();
    editMode = false;
    
    private todoUrl = "/api/todos"
    
    public getToDos() {
        this._http.get(this.todoUrl).map(res => res.json())
      .subscribe(todos => this.todos = todos)
        return this.todos;
    }
    
    constructor(http : Http){
        this._http = http;
        this.headers.append('content-type',"application/json;charset=UTF-8")
    }
    public addNewTodo(newToDo : todoItem){
        console.log(newToDo)
        this._http.post('/api/todo', JSON.stringify(newToDo), {headers:this.headers}).map(response => response.json()).subscribe( data => {
             newToDo._id=data._id;
             this.todos = [...this.todos, newToDo];  
             console.log(newToDo);
        }, error => console.log('Could not load todos.'))
    }
    
    public deleteToDo(todo :todoItem) {
        this.editMode = true;
        this._http.delete('/api/todo/'+todo._id).subscribe(response => {
            let index = this.todos.indexOf(todo);
            this.todos = [
            ...this.todos.slice(0,index),
            ...this.todos.slice(index+1)
            ];
            this.editMode = false;
        }, err => console.log("Error in deleting."))
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
    
    public toggleStatus(todo : todoItem) {
        let newTodo = Object.assign(todo);
        newTodo.status = (todo.status == "completed") ? "started" : "completed";
        this.updateCurrent(todo, newTodo);
    }
    
    public editName(todo : todoItem, newName : string) {
        let newTodo : todoItem = Object.assign(todo);
        newTodo.name = newName;
        this.updateCurrent(todo, newTodo);
        console.log(newTodo);
    }
    
    private updateCurrent(oldTodo : todoItem, newTodo : todoItem) {
        this._http.put('/api/todo', JSON.stringify(newTodo), {headers: this.headers}).map(res => res.json).subscribe(data => {
            let index = this.todos.indexOf(oldTodo);
            this.todos = [
            ...this.todos.slice(0,index),newTodo,
            ...this.todos.slice(index+1)
            ];
        }, err => console.log("error updating."))
    }
}

