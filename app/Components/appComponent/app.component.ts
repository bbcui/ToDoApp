import {Component} from 'angular2/core';
import {todoItem} from '../todoItem/todo.item'

@Component({
    selector: 'my-app',
    templateUrl: 'app/Components/appComponent/app.component.html',
    directives: [todoItem]
})
export class AppComponent { 
    
}