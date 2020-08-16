import { Component, OnInit } from '@angular/core';
import {MatDialog, MatDialogRef} from '@angular/material/dialog';
import {SigninComponent} from '../signin/signin.component';
import { Router } from '@angular/router';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-login',
  templateUrl:'./login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(public dialogRef: MatDialogRef<LoginComponent>,
    public  dialog: MatDialog,
    private authService: AuthService,
    private router: Router,) { }
  user = {username: '', password: '', remember: false};
  error: any;
  
  ngOnInit(): void {
  }

  onSubmit() {
    console.log('User: ', this.user);
    this.authService.login(this.user.username, this.user.password).subscribe(
      success => this.router.navigate(['home']),
      error => this.error = error
    );
    this.dialogRef.close(); 
  }

  openSigninForm() {
    this.dialog.open(SigninComponent, {width: '500px', height: '450px'});
  }

 /*
 login(username: string, password: string) {
  // TODO: call login
  this.authService.login(username, password).subscribe(
    success => this.router.navigate(['list']),
    error => this.error = error
  );
}
*/
}
