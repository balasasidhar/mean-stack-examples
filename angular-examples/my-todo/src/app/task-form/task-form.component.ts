import { Component } from '@angular/core';

@Component({
  selector: 'app-task-form',
  templateUrl: './task-form.component.html',
  styleUrls: ['./task-form.component.css'],
})
export class TaskFormComponent {
  taskInputVal = '';

  onAddClicked() {
    alert(`Your task is ${this.taskInputVal}`);
  }
}
