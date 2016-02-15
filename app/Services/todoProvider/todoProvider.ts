/**
 * Created by bcui on 2/1/16.
 */
import {Injectable} from "angular2/core"
import {todoItem} from "../../Models/todoItem/todo.item"
 
@Injectable()

export class todoProvider{
    todos = Array<todoItem>();
    todo = this.initToDoList();
    dataRef: Firebase;
    testfff;
    public getToDos() {
        return this.todos;
    }
    
    constructor(){
        // this.todos = [
        //  new todoItem("To Do 1", "started"),  
        //  new todoItem("To Do 2", "started"),
        //  new todoItem("To Do 3", "completed"),
        //  new todoItem("To Do 4", "started")
        // ];
        this.dataRef = new Firebase('https://bcui.firebaseio.com/todo');
        // this.todos.forEach(element => {
        //     this.dataRef.set(element);
        // });
       //this.todos = this.initToDoList();
    }
        
    public  newgetToDos() {
        this.initToDoList().then(function(snap){
            console.log("fff");
        });
    }
    
    public initToDoList() : Promise<todoItem> {
        return new Promise((resolve, reject) => {
            this.dataRef.once('value',(snapshot) => {
                resolve(snapshot);
            })            
        });
   }
    
    public test(input){
        
    }
    public addNewTodo(newToDo : todoItem){
        this.todos = [...this.todos, newToDo];
        //this.dataRef.push(newToDo);
        console.log(this.dataRef);
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

