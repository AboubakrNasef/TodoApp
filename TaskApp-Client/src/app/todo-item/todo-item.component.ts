import { Component, Input, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { MatDialogRef } from '@angular/material/dialog';
import { Observable } from 'rxjs';
import { ITodoItem } from 'src/models/todoItem';
import { TodoService } from 'src/services/todo.service.service';
@Component({
  selector: 'app-todo-item',
  templateUrl: './todo-item.component.html',
  styleUrls: ['./todo-item.component.css'],
})
export class TodoItemComponent {
  todoItem: ITodoItem = {
    id: 0,
    title: '',
    description: '',
    dueDate: new Date(),
    createdAt: new Date(),
    updatedAt: new Date(),
    finished: false,
  };
  @ViewChild('todoForm') todoForm!: NgForm; // Accessing the NgForm directive

  constructor(private dialogRef: MatDialogRef<TodoItemComponent>) {}

  onSubmit() {
    if (this.todoForm.valid) {
      // Form is valid, submit it
      console.log('New todo item:', this.todoItem);
      this.dialogRef.close();
    }
  }
}
