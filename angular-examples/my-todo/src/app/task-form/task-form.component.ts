import { Component } from '@angular/core';
import { TodoService } from '../services/todo.service';

@Component({
  selector: 'app-task-form',
  templateUrl: './task-form.component.html',
  styleUrls: ['./task-form.component.css'],
})
export class TaskFormComponent {
  taskInputVal = '';

  constructor(private todoService: TodoService) {}

  onAddClicked() {
    // null/empty check
    if (!this.taskInputVal.trim().length) {
      return alert('Please enter your todo title');
    }

    this.todoService.createTodo(this.taskInputVal.trim());
    this.taskInputVal = '';
  }
}
