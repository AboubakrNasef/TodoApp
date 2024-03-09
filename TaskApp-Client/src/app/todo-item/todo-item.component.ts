import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';
import { MatDialogRef } from '@angular/material/dialog';

import { IPostTodoItem, ITodoItem } from 'src/models/todoItem';
import { TodoService } from 'src/services/todo.service.service';

@Component({
  selector: 'app-todo-item',
  templateUrl: './todo-item.component.html',
  styleUrls: ['./todo-item.component.css'],
})
export class TodoItemComponent {
  todoItem: IPostTodoItem = {
    title: '',
    description: '',
    dueDate: new Date(),
  };

  constructor(
    private dialogRef: MatDialogRef<TodoItemComponent>,
    private todoService: TodoService
  ) {}

  onSubmit(todoForm: NgForm) {
    if (todoForm.valid) {
      this.todoService.addTodoItem(this.todoItem).subscribe();

      this.dialogRef.close();
    }
  }

  closeDialog() {
    this.dialogRef.close();
  }
}
