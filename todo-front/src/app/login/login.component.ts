import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { HardcodedAuthenticationService } from '../services/hardcoded-authentication.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  
  username = 'Wittman';
  password = '';
  errorMessage = 'Invalid Credentials';
  invalidLogin = false;

  //Router
  //Angular.giveMeRouter
  //Dependency Injection
  constructor(private router: Router,
    private hardcodedAuthenticationService: HardcodedAuthenticationService) { 
    console.log("Constructor");
  }

  ngOnInit(): void {
    console.log("ng OnInit");
  }

  handleLogin() {
    console.log(this.username);
    if(this.hardcodedAuthenticationService.authenticate(this.username, this.password)) {
      this.router.navigate(['welcome', this.username])
      this.invalidLogin = false
    } else {
      this.invalidLogin = true
    }
  }  
  // //Router
  // //Angular.giveMeRouter
  // //Dependency Injection
  // constructor(private router: Router,
  //   private hardcodedAuthenticationService: HardcodedAuthenticationService,
  //   private basicAuthenticationService: BasicAuthenticationService) { }

  // ngOnInit() {
  // }

  // handleLogin() {
  //   // console.log(this.username);
  //   //if(this.username==="in28minutes" && this.password === 'dummy') {
  //   if(this.hardcodedAuthenticationService.authenticate(this.username, this.password)) {
  //     //Redirect to Welcome Page
  //     this.router.navigate(['welcome', this.username])
  //     this.invalidLogin = false
  //   } else {
  //     this.invalidLogin = true
  //   }
  // }

  // handleBasicAuthLogin() {
  //   // console.log(this.username);
  //   //if(this.username==="in28minutes" && this.password === 'dummy') {
  //   this.basicAuthenticationService.executeAuthenticationService(this.username, this.password)
  //       .subscribe(
  //         data => {
  //           console.log(data)
  //           this.router.navigate(['welcome', this.username])
  //           this.invalidLogin = false      
  //         },
  //         error => {
  //           console.log(error)
  //           this.invalidLogin = true
  //         }
  //       )
  // }

  handleJWTAuthLogin() {
    // this.basicAuthenticationService.executeJWTAuthenticationService(this.username, this.password)
    //     .subscribe(
    //       data => {
    //         console.log(data)
    //         this.router.navigate(['welcome', this.username])
    //         this.invalidLogin = false      
    //       },
    //       error => {
    //         console.log(error)
    //         this.invalidLogin = true
    //       }
    //     )
    console.log("handleJWTAuthLogin:" + this.username)
  }  

}
