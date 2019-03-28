import { Component, AfterContentChecked, AfterViewInit } from '@angular/core';
import { UserService } from 'src/app/services/user/user.service';
import { Profile } from 'src/app/models/profile';
import { MatSnackBar } from '@angular/material';
import { Router } from '@angular/router';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements AfterViewInit {
  userProfile: Profile;
  constructor(private userService: UserService, private snackBar: MatSnackBar, private router: Router) { }

  ngAfterViewInit() {
    setTimeout(() => {
      this.userService.getProfile().subscribe((data: Profile) => {
        console.log(data);
        this.userProfile = data;
      }, error => {
        if (error === 'token') {
          const snack = this.snackBar.open('You need to login first.', 'Login', {
            duration: 60000,
            verticalPosition: "bottom",
            panelClass: 'snack-custom'

          });
          snack.onAction().subscribe(() => {
            this.userService.login();
          });
        }
      });
    });
  }

}
