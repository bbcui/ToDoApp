import {Component, View} from 'angular2/core';
import {todoList} from '../todoList/todo.list'

@Component({
    selector: 'my-app',
    templateUrl: 'app/Components/appComponent/app.component.html',
    directives: [todoList]
})
export class AppComponent { 
    
}