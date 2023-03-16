import { Component } from '@angular/core';
import { todoListItems } from 'src/mock-data/todo-list.mock';

@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.css'],
})
export class TodoListComponent {
  todoList = todoListItems;
}
