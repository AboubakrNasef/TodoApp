import { Component, OnInit } from '@angular/core';
import { NgFor } from '@angular/common';
import { MatListModule } from '@angular/material/list';
import { TodoItemComponent } from '../todo-item/todo-item.component';
import { TodoService } from 'src/services/todo.service.service';
import { ITodoItem } from 'src/models/todoItem';
import { DialogService } from 'src/services/dialog.service';
import {
  MatDialog,
  MatDialogActions,
  MatDialogClose,
  MatDialogContent,
  MatDialogRef,
  MatDialogTitle,
} from '@angular/material/dialog';

@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.css'],
})
export class TodoListComponent {
  todoItems: ITodoItem[] = [];
  displayedColumns: string[] = [
    'Id',
    'Title',
    'Due',
    'Created',
    'Edit',
    'Delete',
    'Status',
  ];

  constructor(private todoService: TodoService, private dialog: MatDialog) {
    this.loadTodoItems();
  }
  loadTodoItems() {
    this.todoService.getTodoItems().subscribe({
      next: (items: ITodoItem[]) => {
        this.todoItems = items;
      },
      error: (error) => {
        console.error('Error fetching todo items:', error);
      },
    });
  }

  onCheckboxChange(event: any, element: ITodoItem) {
    if (event!.target.checked) {
      element.finished = true;

      // Call a method or perform an action
    } else {
      element.finished = false;
    }
    console.log(element);
  }

  editTodo(element: ITodoItem) {
    console.log(element);
  }
  deleteTodo(element: ITodoItem) {
    console.log(element);
  }

  addTodo() {
    this.dialog.open(TodoItemComponent);
  }
}
