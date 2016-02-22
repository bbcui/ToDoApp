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
    
    private todoUrl = "/api/todos"
    
    public getToDos() {
        this._http.get(this.todoUrl).map(res => res.json())
      .subscribe(todos => this.todos = todos)
        return this.todos;
    }
    
    constructor(http : Http){
        this._http = http;
    }
    public addNewTodo(newToDo : todoItem){
        console.log(newToDo);
        var headers = new Headers();
        headers.append('content-type',"application/json;charset=UTF-8");
        this._http.post('/api/todo', JSON.stringify(newToDo), {headers:headers}).map(response => response.json()).subscribe( data => {
             newToDo._id=data._id;
             this.todos = [...this.todos, newToDo];  
             console.log(newToDo);
        }, error => console.log('Could not load todos.'))
    }
    
    public deleteToDo(todo :todoItem) {
        
        // this.todos = [
        //     ...this.todos.slice(0,index),
        //     ...this.todos.slice(index+1)
        // ];
        this._http.delete('/api/todo/'+todo._id).subscribe(response => {
            let index = this.todos.indexOf(todo);
            this.todos = [
            ...this.todos.slice(0,index),
            ...this.todos.slice(index+1)
            ];
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
        let newTodo = Object.create(todo);
        newTodo.status = (todo.status == "completed") ? "started" : "completed";
        let index = this.todos.indexOf(todo);
        this.todos = [
        ...this.todos.slice(0,index),newTodo,
        ...this.todos.slice(index+1)
        ];
    }
}

