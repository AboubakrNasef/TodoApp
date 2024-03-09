import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { IPatchTodoItem, IPostTodoItem, ITodoItem } from 'src/models/todoItem';
@Injectable({
  providedIn: 'root',
})
export class TodoService {
  private apiUrl = 'https://localhost:7034/api/TodoItems';

  constructor(private http: HttpClient) {}

  getTodoItems(): Observable<ITodoItem[]> {
    return this.http.get<ITodoItem[]>(this.apiUrl);
  }

  getTodoItem(id: number): Observable<ITodoItem> {
    return this.http.get<ITodoItem>(`${this.apiUrl}/${id}`);
  }

  addTodoItem(todoItem: IPostTodoItem): Observable<IPostTodoItem> {
    console.log(todoItem);
    return this.http.post<IPostTodoItem>(this.apiUrl, todoItem);
  }

  updateTodoItem(
    id: number,
    todoItem: IPatchTodoItem
  ): Observable<IPatchTodoItem> {
    return this.http.patch<ITodoItem>(`${this.apiUrl}/${id}`, todoItem);
  }

  deleteTodoItem(id: number): Observable<any> {
    return this.http.delete<any>(`${this.apiUrl}/${id}`);
  }
}
