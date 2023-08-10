import { Component, OnInit } from '@angular/core';
import { HardcodedAuthenticationService } from '../services/hardcoded-authentication.service';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {
  // isUserLoggedIn = false;
  
  constructor(public hardcodedAuthenticationService 
    : HardcodedAuthenticationService) { }

    ngOnInit() {
      // It causes a flaw because variable rendering
      // this.isUserLoggedIn = this.hardcodedAuthenticationService.isUserLoggedIn();
    }    
}
