import { Component, EventEmitter, Input, Output } from '@angular/core';
import { TodoItem } from 'src/models/todo-item.model';

@Component({
  selector: 'app-done-list',
  templateUrl: './done-list.component.html',
  styleUrls: ['./done-list.component.css'],
})
export class DoneListComponent {
  @Input() doneListItems: TodoItem[] = [];

  @Output() markAsTodo = new EventEmitter<TodoItem>();

  onCheckboxChanged(todoItem: TodoItem) {
    console.log(todoItem);
    todoItem.isCompleted = false;
    todoItem.completedAt = undefined;
    this.markAsTodo.emit(todoItem);
  }
}
