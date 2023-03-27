import { Component } from '@angular/core';
import { TodoItem } from 'src/models/todo-item.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'My Todo';

  todoList: TodoItem[] = this.readFromStorage();
  doneList: TodoItem[] = [];

  addNewTodo(item: TodoItem) {
    this.todoList.push(item);
    this.writeToStorage(this.todoList);
  }

  markAsDone(todo: TodoItem) {
    // check for existance
    const todoIndex = this.todoList.findIndex((item) => item.id === todo.id);
    if (todoIndex < 0) {
      return alert('Invalid todo item');
    }

    // remove from todo list
    this.todoList.splice(todoIndex, 1);

    // add to done list
    this.doneList.push(todo);
  }

  markAsTodo(todo: TodoItem) {
    // check for existance
    const todoIndex = this.doneList.findIndex((item) => item.id === todo.id);
    if (todoIndex < 0) {
      return alert('Invalid todo item');
    }

    // remove from done list
    this.doneList.splice(todoIndex, 1);

    // add to todo list
    this.todoList.push(todo);
  }

  writeToStorage(list: TodoItem[]) {
    const listStr = JSON.stringify(list);
    localStorage.setItem('todoItems', listStr);
  }

  readFromStorage(): TodoItem[] {
    const listStr: string = localStorage.getItem('todoItems') || '[]';
    return JSON.parse(listStr);
  }
}
