import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';
import { ApiService } from '../../service/api.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss'
})
export class LoginComponent {
loginForm: FormGroup;
  user: any;
  loggedIn: boolean = false;
  notValid: boolean = false;
  loading: boolean = false;
  comp_ID: any;
  errorMsg: any;
  showPassword: boolean = false;
  loader = false;

  constructor(
    private fb: FormBuilder, // private authService: SocialAuthService
    //private api: ApiService,
    private router: Router,
    private _as: ApiService,
    private snackBar: MatSnackBar,
    
  ) { }

  ngOnInit(): void {
    this.loginValidation();
    localStorage.clear()
    // this.googleLogin();
  }

  loginValidation() {
    this.loginForm = this.fb.group({
      username: ['', Validators.compose([Validators.required, Validators.email])],
      password: ['', Validators.required],
    });
  }

  submitLogin() {
    if (this.loginForm.valid) {
      this.loader = true;
      this.loading = true;
      let param = this.loginForm.value;
      if(this.loginForm.get('username').value =='monet@monet.com' &&this.loginForm.get('password').value =='password@123' ){
setTimeout(() => {
    localStorage.setItem('logged_in', 'true');
        this._as.islogin.next(true);
        this.router.navigate(['/dashboard'])
},1000);
      
      }
      // this._as.userPost('login', param).subscribe({
      //   next: (res: any) => {
      //     this.loader = false;
      //     if (res && !res.error) {
      //       localStorage.setItem('token', res.token);
      //       localStorage.setItem('logged_in', 'true');
      //       this.router.navigate(['/dashboard']);
      //        this.snackBar.open(res.message, 'Close', { duration: 3000, verticalPosition: 'top', horizontalPosition: 'right', panelClass: ['success-snackbar'] });
      //     } 
      //   },
      //   error: (err: any) => {
      //     this.loader = false;
      //     console.error('HTTP Error:', err);
      //     this.snackBar.open(err.error.message, 'Close', { duration: 3000, verticalPosition: 'top', horizontalPosition: 'right',panelClass: ['error-snackbar'] });
      //   }
      // });


    } else {
      console.log('not valid');
      this.notValid = true;
      setTimeout(() => {
        this.notValid = false;
      }, 3000);

      // this.snackBar.open('You’ve entered an invalid username or password. Please try again.', 'Close', {
      //   duration: 50000,
      //   verticalPosition: 'top',
      //   horizontalPosition: 'right',
      //   panelClass: ['error-snackbar']
      // })
      this.snackBar.open(
  'You’ve entered an invalid username or password. Please try again.',
  'Close',
  {
    duration: 2000,
    verticalPosition: 'top',
    horizontalPosition: 'right',
   panelClass: ['error-snackbar']
  }
);
    }
  }

}
