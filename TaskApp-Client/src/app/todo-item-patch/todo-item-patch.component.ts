import { Component, Inject, OnInit, inject } from '@angular/core';
import { NgForm } from '@angular/forms';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { IPatchTodoItem } from 'src/models/todoItem';
import { TodoService } from 'src/services/todo.service.service';

@Component({
  selector: 'app-todo-item-patch',
  templateUrl: './todo-item-patch.component.html',
  styleUrls: ['./todo-item-patch.component.css'],
})
export class TodoItemPatchComponent implements OnInit {
  todoItem: IPatchTodoItem;

  constructor(
    private dialogRef: MatDialogRef<TodoItemPatchComponent>,
    private todoService: TodoService,
    @Inject(MAT_DIALOG_DATA) public data: any
  ) {}
  ngOnInit(): void {
    console.log(this.data);
    this.todoItem = <IPatchTodoItem>this.data;
  }

  onSubmit(todoForm: NgForm) {
    if (todoForm.valid) {
      // Form is valid, submit it
      console.log('New todo item:', this.todoItem);
      this.todoService
        .updateTodoItem(this.todoItem.id, this.todoItem)
        .subscribe();

      this.dialogRef.close();
    }
  }

  closeDialog() {
    this.dialogRef.close();
  }
}
