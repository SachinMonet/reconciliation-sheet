import { Component, OnInit } from '@angular/core';
import { ApiService } from '../../service/api.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.scss'
})
export class NavbarComponent implements OnInit {
    loggedIn ;

 constructor( 
  private _api: ApiService,
  private router: Router
 ) {
  this._api.islogin.subscribe(res =>  this.loggedIn = res);
 } 
ngOnInit(): void {
 

}
 
 
 logOut(){
 this._api.islogin.next(false);
 this.router.navigate(['/']);
 }

}
