export interface ITodoItem {
  id: number;
  title: string;
  description: string;
  dueDate: Date;
  createdAt: Date;
  updatedAt: Date;
  finished: boolean;
}
export interface IPostTodoItem {
  title: string;
  description: string;
  dueDate: Date;
}
export interface IPatchTodoItem {
  id: number;
  title?: string;
  description?: string;
  dueDate?: Date;
  finished?: boolean;
}
