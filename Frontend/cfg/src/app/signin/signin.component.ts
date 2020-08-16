import { Component, OnInit } from '@angular/core';
import {MatDialog, MatDialogRef} from '@angular/material/dialog';
import {LoginComponent} from '../login/login.component'
import { AuthService } from '../auth.service';

import { Router } from '@angular/router';

@Component({
  selector: 'app-signin',
  templateUrl:'./signin.component.html',
  styleUrls: ['./signin.component.css']
})
export class SigninComponent implements OnInit {

  constructor(public dialogRef: MatDialogRef<SigninComponent>,
    public  dialog: MatDialog,
    private authService: AuthService,private router: Router,) { }
  user = {username: '',email:'', password1: '',password2:'', remember: false};
  error: any;
  ngOnInit(): void {
  }

  compare_password(){
    if (this.user.password1 == this.user.password2){
      return true;
    }
    else{
      return false;
    }

  }
  onSubmit() {
    if (this.compare_password() == true){
      this.authService.signup(this.user.username,this.user.email, this.user.password1, this.user.password2).subscribe(
        success => this.router.navigate(['home']),
        error => this.error = error
      );
      this.dialogRef.close();
    }
     else {
       this.error ='Passwords are different'
     }
  }

  openLoginForm() {
    this.dialog.open(LoginComponent, {width: '500px', height: '450px'});
  }

/*
signup(username: string, email: string, password1: string, password2: string) {
  // TODO: call signup
  this.authService.signup(username, email, password1, password2).subscribe(
    success => this.router.navigate(['list']),
    error => this.error = error
  );
}
*/
}
