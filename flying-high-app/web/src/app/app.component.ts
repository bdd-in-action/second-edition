import { Component, OnDestroy, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { AuthService } from './shared/services/auth.service';
import { UsersAccountService } from './shared/services/users-account.service';
import { User } from './users/user.interface';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit, OnDestroy {

  title = 'web';
  email: string;
  userId: string;
  loggedInUserSub: Subscription;
  points: number;

  constructor(
    private authService: AuthService,
    private userService: UsersAccountService,
    private router: Router
  ) { }

  async ngOnInit() {
    if (this.authService.isLogin()) {
      this.email = this.authService.getLoggedInUser().email;
      this.userId = this.authService.getLoggedInUser().userId;
    }
    this.loggedInUserSub = this.authService.getLoggedInUser$.subscribe(async loggedInUser => {
      this.email = loggedInUser.email;
      this.userId = loggedInUser.userId;
    });
  }

  ngOnDestroy() {
    this.loggedInUserSub.unsubscribe();
  }

  isLogin() {
    return this.authService.isLogin();
  }

  logout() {
    this.authService.logout();
  }

  clickLogo() {
    this.router.navigate(['']);
  }

  toLogin() {
    this.router.navigate(['login']);
  }

  toRegister() {
    this.router.navigateByUrl('register');
  }

  toMyBookings() {
    this.router.navigateByUrl('bookings');
  }

  toMyAccount() {
    this.router.navigateByUrl('users');
  }

  toSearch() {
    this.router.navigateByUrl('search');
  }

  toUserProfile() {
    this.router.navigateByUrl('users/profile')
  }

  async getUserPoint() {
    this.points = (await this.userService.getUser(this.userId).toPromise()).points;
  }
}
