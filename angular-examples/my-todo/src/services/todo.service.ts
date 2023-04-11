import { EventEmitter } from '@angular/core';
import { BehaviorSubject, Observable, Subject } from 'rxjs';

import { TodoItem } from 'src/models/todo-item.model';

export class ToDoService {
  private todoList: TodoItem[] = [];

  private observer: any;

  refreshList = new Observable((obs) => (this.observer = obs));

  addTodo(todo: TodoItem): any {
    this.todoList.push(todo);
    console.log(this.todoList, ToDoService.name);
    this.observer?.next('hello');
  }

  update(item: any): void {}

  deleteTodo(item: any): void {}

  getTodos(): TodoItem[] {
    return this.todoList;
  }
}
