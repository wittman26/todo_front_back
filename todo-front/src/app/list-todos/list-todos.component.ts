import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-list-todos',
  templateUrl: './list-todos.component.html',
  styleUrls: ['./list-todos.component.css']
})
export class ListTodosComponent implements OnInit {

  todos = [
    {id : 1, description : 'Remember how to Dance'},
    {id : 2, description : 'Remember how to use Angular'},
    {id : 3, description : 'Remember how to use Spring'}
  ]

  // todo = {
  //     id : 1,
  //     description: 'Learn to Dance'
  // }

  constructor() { }

  ngOnInit() {
    console.log("noOnInit")
  }
}
