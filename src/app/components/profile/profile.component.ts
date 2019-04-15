import { Component, AfterContentChecked, AfterViewInit } from '@angular/core';
import { UserService } from 'src/app/services/user/user.service';
import { Profile } from 'src/app/models/profile';
import { MatSnackBar } from '@angular/material';
import { Media } from 'src/app/models/media';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements AfterViewInit {
  userProfile: Profile;
  followsCount: number = 0;
  followersCount: number = 0;
  postsCount: number = 0;
  posts: Media[];
  constructor(private userService: UserService, private snackBar: MatSnackBar) { }

  ngAfterViewInit() {
    setTimeout(() => {
      this.userService.getProfile().subscribe((data: Profile) => {
        this.userProfile = data;
        this.userService.getRecentMedia().subscribe((data: Media[]) => {
          this.posts = data;
        }, error => {
          console.error(error);
        })
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
