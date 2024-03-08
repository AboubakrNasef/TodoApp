import { Component, OnInit } from '@angular/core';
import { NgFor } from '@angular/common';
import { MatListModule } from '@angular/material/list';
import { TodoItemComponent } from '../todo-item/todo-item.component';
@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.css'],
})
export class TodoListComponent implements OnInit {
  todoItems: TodoItemComponent[] = [];

  ngOnInit(): void {
    for (let index = 0; index < 10; index++) {
      this.todoItems.push(new TodoItemComponent());
    }
  }
}
