import { Component, OnInit } from '@angular/core';
import { LoginComponent} from '../login/login.component';
import { MatDialog, MatDialogRef } from '@angular/material/dialog';
import { AuthService } from '../auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  constructor(public  dialog: MatDialog,
    private authService: AuthService,
    private router: Router,) { }

  ngOnInit(): void {
  }

  openLoginForm() {
    this.dialog.open(LoginComponent, {width: '500px', height: '450px'});
  }

  logout(){
    this.authService.logout();
    this.router.navigate(['home'])
  }

}
