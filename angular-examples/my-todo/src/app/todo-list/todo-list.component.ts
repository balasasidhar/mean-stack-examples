import { Component } from '@angular/core';
import { TodoItem } from 'src/models/todo-item.model';
import { TodoService } from '../services/todo.service';

@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.css'],
})
export class TodoListComponent {
  todoListItems: TodoItem[] = [];

  constructor(private todoService: TodoService) {}

  ngOnInit() {
    this.todoListItems = this.todoService.getTodos();
  }

  onCheckboxChanged(todoItem: TodoItem) {
    this.todoService.toggleTodo(todoItem, true);
  }

  onDeleteClicked(todoItem: TodoItem) {
    this.todoService.deleteTodo(todoItem);
  }
}
