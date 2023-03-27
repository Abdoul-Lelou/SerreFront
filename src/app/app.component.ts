import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { NavigationStart, Router } from '@angular/router';
import { UserService } from './services/user.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'SerreFront';
  showLogin: boolean = false;

  constructor(private auth: UserService, private router: Router, private http: HttpClient) {

    router.events.forEach((event) => {
      if (event instanceof NavigationStart) {
        if (event.url === '/login' || event.url === '/') {
          this.showLogin = true;
        } else {
          this.showLogin = false;
          
        }
      }
    });
  }

}
