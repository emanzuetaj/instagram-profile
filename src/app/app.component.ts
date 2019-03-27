import { Component } from '@angular/core';
import { Subscription } from 'rxjs';
import { UserService } from './services/user/user.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  loading: boolean = false;
  displayLoaderEvent: Subscription = new Subscription();
  constructor(private userService: UserService) {
    this.userService.displayLoaderEvent$.subscribe((displayLoader: boolean) => {
      this.loading = displayLoader;
    });
  }
}
