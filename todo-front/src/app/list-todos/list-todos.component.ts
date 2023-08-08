import { Component, OnInit } from '@angular/core';

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

  todos = [
    new Todo(1,'Remember how to Dance',false, new Date()),
    new Todo(2,'Remember how to use Angular',false, new Date()),
    new Todo(3,'Remember how to use Spring',false, new Date())
  ]

  constructor() { }

  ngOnInit() {
    console.log("noOnInit")
  }
}
