import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Todo } from 'src/app/list-todos/list-todos.component';
import { TodoDataService } from 'src/app/services/data/todo-data.service';

@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.css']
})
export class TodoComponent implements OnInit {

  id = -1;
  todo!: Todo;

  constructor(
    private todoService: TodoDataService,
    private route: ActivatedRoute,
    private router: Router
  ) { }

  ngOnInit() {
    this.id = this.route.snapshot.params['id'];

    this.todo = new Todo(this.id,'',false,new Date());
    
    if(this.id!=-1) {
      this.todoService.retrieveTodo('wittman', this.id)
      .subscribe (
        data => this.todo = data
      )
    }

  }

  saveTodo() {
    if(this.id === -1) {
      console.log('Creando' + JSON.stringify(this.todo));
      this.todoService.createTodo('wittman', this.todo)
          .subscribe (
            data => {
              console.log(data)
              this.router.navigate(['todos'])
            }
          )
    } else {
      console.log('Actualizando' + JSON.stringify(this.todo));
      this.todoService.updateTodo('wittman', this.id, this.todo)
          .subscribe (
            data => {
              console.log(data)
              this.router.navigate(['todos'])
            }
          )
    }    
  }

}
