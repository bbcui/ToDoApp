/**
 * Created by bcui on 2/1/16.
 */
import {Injectable} from "angular2/core"
import {todoItem} from "../Models/todoItem/todo.item"

@Injectable()

export class todoProvider{
    public getToDos() {
        return [
          {name : "To Do 1", status: "started"},  
          {name : "To Do 2", status: "started"},
          {name : "To Do 3", status: "completed"},
          {name : "To Do 4", status: "started"}
        ];
    }
    
}

