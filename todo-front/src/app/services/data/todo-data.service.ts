import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Todo } from 'src/app/list-todos/list-todos.component';

const port = 9191;

@Injectable({
  providedIn: 'root'
})
export class TodoDataService {

  constructor(
    private http:HttpClient
  ) { }

  retrieveAllTodos(username: any) {
    return this.http.get<Todo[]>(`http://localhost:${port}/users/${username}/todos`);
    //console.log("Execute Hello World Bean Service")
  }

  deleteTodo(username: any, id: any){
    return this.http.delete(`http://localhost:${port}/users/${username}/todos/${id}`);
  }

  retrieveTodo(username: any, id: any){
    return this.http.get<Todo>(`http://localhost:${port}/users/${username}/todos/${id}`);
  }

  updateTodo(username: any, id: any, todo: Todo){
    return this.http.put(`http://localhost:${port}/users/${username}/todos/${id}`, todo);
  }

  createTodo(username: any, todo: Todo){
    return this.http.post(`http://localhost:${port}/users/${username}/todos`, todo);
  }  
}
