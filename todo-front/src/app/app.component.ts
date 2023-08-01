import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  // template: '<h1>{{witt_test}}</h1>',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'todo';
  witt_test = 'Wittman Test!!';
}
