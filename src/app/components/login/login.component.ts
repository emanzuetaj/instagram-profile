import { Component, OnInit, EventEmitter, AfterContentChecked } from '@angular/core';
import { UserService } from 'src/app/services/user/user.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements AfterContentChecked {
  constructor(private userService: UserService, private activatedRoute: ActivatedRoute, public router: Router) { }

  ngAfterContentChecked() {
    setTimeout(() => {
      this.activatedRoute.fragment.subscribe((fragment) => {
        if (fragment) {
          this.userService.getProfile(fragment).subscribe(success => {
            this.router.navigateByUrl('/profile');
          });
        }
      });
    });
  }
  redirectToInstagram() {
    this.userService.login();
  }
}
