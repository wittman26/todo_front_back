import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { HardcodedAuthenticationService } from './hardcoded-authentication.service';

@Injectable({
  providedIn: 'root'
})
export class RouteGuardService  {

  constructor(
    private hardcodedAuthenticationService: HardcodedAuthenticationService,
    private router: Router) {

  }

  canActivate() {

    if (this.hardcodedAuthenticationService.isUserLoggedIn())
      return true;

    this.router.navigate(['login']);

    return false;
  }
}