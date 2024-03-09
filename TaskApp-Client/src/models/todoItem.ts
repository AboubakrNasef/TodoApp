export interface ITodoItem {
  id: number;
  title: string;
  description: string;
  dueDate: Date;
  createdAt: Date;
  updatedAt: Date;
  finished: boolean;
}
