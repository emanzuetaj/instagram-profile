import { Component } from '@angular/core';
import { Subscription } from 'rxjs';
import { UserService } from './services/user/user.service';
import { Router, RouterEvent, NavigationEnd } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  loading: boolean = false;
  currentUrl: string = '';
  displayLoaderEvent: Subscription = new Subscription();
  constructor(private userService: UserService, private router: Router) {
    this.userService.displayLoaderEvent$.subscribe((displayLoader: boolean) => {
      this.loading = displayLoader;
    });
    router.events.subscribe((event: RouterEvent) => {
      if (event instanceof NavigationEnd) {
        this.currentUrl = event.url;
      }
    });
  }
}
