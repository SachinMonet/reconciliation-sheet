import { Injectable } from '@angular/core';
import { Router, CanActivate } from '@angular/router';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {

  constructor(private router: Router) { }

  canActivate(): Observable<boolean> | Promise<boolean> | boolean {
    const token = localStorage.getItem('token');
    const loggedIn = localStorage.getItem('logged_in');

    if (loggedIn === 'true') {
      return true;
    } else {
      this.router.navigate(['']);
      return false;
    }
  }
}
