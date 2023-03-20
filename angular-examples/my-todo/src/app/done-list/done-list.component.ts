import { Component, Input } from '@angular/core';
import { TodoItem } from 'src/models/todo-item.model';

@Component({
  selector: 'app-done-list',
  templateUrl: './done-list.component.html',
  styleUrls: ['./done-list.component.css'],
})
export class DoneListComponent {
  @Input() doneListItems: TodoItem[] = [];
}
