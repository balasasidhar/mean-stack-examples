import { Component, EventEmitter, Input, Output } from '@angular/core';
import { TodoItem } from 'src/models/todo-item.model';
import { TodoService } from '../services/todo.service';

@Component({
  selector: 'app-done-list',
  templateUrl: './done-list.component.html',
  styleUrls: ['./done-list.component.css'],
})
export class DoneListComponent {
  doneListItems: TodoItem[] = [];

  constructor(private todoService: TodoService) {}

  ngOnInit() {
    this.doneListItems = this.todoService.getDoneList();
  }

  onCheckboxChanged(todoItem: TodoItem) {
    this.todoService.toggleTodo(todoItem, false);
  }
}
