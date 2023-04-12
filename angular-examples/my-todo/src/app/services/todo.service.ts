import { Injectable } from '@angular/core';
import { TodoItem } from 'src/models/todo-item.model';

@Injectable({ providedIn: 'root' })
export class TodoService {
  private todoList: TodoItem[] = [];
  private doneList: TodoItem[] = [];

  createTodo(todoText: string): void {
    const todoObj: TodoItem = {
      id: Date.now(),
      title: todoText,
      createdAt: new Date(),
      isCompleted: false,
    };

    this.todoList.push(todoObj);
  }

  toggleTodo(item: TodoItem, markAsDone: boolean): void {
    if (markAsDone) {
      // todo --> done
      item.isCompleted = true;
      item.completedAt = new Date();
      const index = this.todoList.findIndex((i) => i.id === item.id);
      this.todoList.splice(index, 1); // remove current item from todo
      this.doneList.push(item);
    } else {
      // done --> todo
      item.isCompleted = false;
      item.completedAt = undefined;
      const index = this.doneList.findIndex((i) => i.id === item.id);
      this.doneList.splice(index, 1); // remove current item from done
      this.todoList.push(item);
    }
  }

  deleteTodo(todoItem: TodoItem): void {
    const index = this.todoList.findIndex((item) => todoItem.id === item.id);
    this.todoList.splice(index, 1);
  }

  getTodos(): TodoItem[] {
    return this.todoList;
  }

  getDoneList(): TodoItem[] {
    return this.doneList;
  }
}
