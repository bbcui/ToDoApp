import {Pipe, PipeTransform} from "angular2/core"
import {todoItem} from "../../Models/todoItem/todo.item"

@Pipe({
    name:"searchPipe"
})

export class searchPipe implements PipeTransform{
    transform(value, args?){
        return value.filter(function(todo: todoItem){
            return todo.name.startsWith(args[0]);
        });
    }
}
