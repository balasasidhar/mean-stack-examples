// todo-item.model.ts

export interface TodoItem {
  id: number;
  title: string;
  createdAt?: Date;
  completedAt?: Date;
}
