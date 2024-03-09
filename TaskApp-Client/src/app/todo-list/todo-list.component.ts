import { Component, OnInit } from '@angular/core';

import { TodoItemComponent } from '../todo-item/todo-item.component';
import { TodoService } from 'src/services/todo.service.service';
import { ITodoItem } from 'src/models/todoItem';
import { MatIcon } from '@angular/material/icon';
import { MatDialog } from '@angular/material/dialog';
import { TodoItemPatchComponent } from '../todo-item-patch/todo-item-patch.component';

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

    this.todoService
      .updateTodoItem(element.id, {
        id: element.id,
        finished: element.finished,
      })
      .subscribe();
    console.log(element);
  }

  editTodo(element: ITodoItem) {
    this.dialog
      .open(TodoItemPatchComponent, {
        data: {
          id: element.id,
          title: element.title,
          description: element.description,
          dueDate: element.dueDate,
        },
      })
      .afterClosed()
      .subscribe(() => this.loadTodoItems());
  }
  deleteTodo(element: ITodoItem) {
    this.todoService
      .deleteTodoItem(element.id)
      .subscribe(() => this.loadTodoItems());
  }

  addTodo() {
    this.dialog
      .open(TodoItemComponent)
      .afterClosed()
      .subscribe(() => this.loadTodoItems());
  }
}
