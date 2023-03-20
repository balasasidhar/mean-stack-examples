import { Component, EventEmitter, Output } from '@angular/core';
import { TodoItem } from 'src/models/todo-item.model';

@Component({
  selector: 'app-task-form',
  templateUrl: './task-form.component.html',
  styleUrls: ['./task-form.component.css'],
})
export class TaskFormComponent {
  taskInputVal = '';

  @Output() addNewTodoItem = new EventEmitter<TodoItem>();

  onAddClicked() {
    // null/empty check
    if (!this.taskInputVal.trim().length) {
      return alert('Please enter your todo title');
    }

    let todoObj: TodoItem = {
      id: Date.now(),
      title: this.taskInputVal,
      createdAt: new Date(),
      isCompleted: false,
    };
    console.log(todoObj);
    this.addNewTodoItem.emit(todoObj);
    this.taskInputVal = '';
  }
}
