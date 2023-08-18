import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { TodoDataService } from '../services/data/todo-data.service';

export class Todo {
  constructor(
    public id: number,
    public description: string,
    public done: boolean,
    public targetDate: Date
  ) {

  }
}


@Component({
  selector: 'app-list-todos',
  templateUrl: './list-todos.component.html',
  styleUrls: ['./list-todos.component.css']
})
export class ListTodosComponent implements OnInit {

  todos: Todo[] = [];

  message: string | undefined
  // [
  //   new Todo(1,'Remember how to Dance',false, new Date()),
  //   new Todo(2,'Remember how to use Angular',false, new Date()),
  //   new Todo(3,'Remember how to use Spring',false, new Date())
  // ]

  constructor(
    private todoService:TodoDataService,
    private router : Router
  ) { }

  ngOnInit() {
    this.refreshTodos();
  }

  refreshTodos(){
    this.todoService.retrieveAllTodos('Wittman').subscribe(
      response => {
        console.log(response);
        this.todos = response;
      }
    )
  }

  deleteTodo(id: any) {
    console.log(`delete todo ${id}` )
    this.todoService.deleteTodo('wittman', id).subscribe (
      response => {
        console.log(response);
        this.message = `Delete of Todo ${id} Successful!`;
        this.refreshTodos();
      }
    )
  }  
  
  updateTodo(id: any) {
    console.log(`update ${id}`)
    this.router.navigate(['todos',id])
  }
  
  addTodo() {
    this.router.navigate(['todos',-1])
  }  
}
