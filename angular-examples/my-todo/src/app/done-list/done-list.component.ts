import { Component } from '@angular/core';
import { doneListItems } from 'src/mock-data/done-list.mock';

@Component({
  selector: 'app-done-list',
  templateUrl: './done-list.component.html',
  styleUrls: ['./done-list.component.css'],
})
export class DoneListComponent {
  doneList = doneListItems;
}
