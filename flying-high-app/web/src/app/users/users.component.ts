import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { USER_LEVEL } from '../shared/enums/user.enum';
import { AuthService } from '../shared/services/auth.service';
import { UsersAccountService } from '../shared/services/users-account.service';
import { EditUserDialogComponent } from './edit-user-dialog/edit-user-dialog.component';
import { User } from './user.interface';
import { UsersAccount } from './users-account.interface';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.scss']
})
export class UsersComponent implements OnInit {

  usersAccount: UsersAccount[] = [];
  userLevel: USER_LEVEL;
  totalPoints: number;
  displayedColumns: string[] = ['date', 'departure', 'destination', 'pointsEarned'];
  user: User;

  constructor(
    private userAccountService: UsersAccountService,
    private authService: AuthService,
    private dialog: MatDialog,
    private router: Router
  ) { }

  async ngOnInit() {
    const email = this.authService.getLoggedInUser().email;
    const authUserId = this.authService.getLoggedInUser().userId;
    this.user = await this.userAccountService.getUser(authUserId).toPromise();
    this.userLevel = this.user.userLevel;
    const res = await this.userAccountService.getUserAccount(email).toPromise();
    this.usersAccount = res.userAccount;
    this.totalPoints = res.totalPoints;
  }

  async openUserModal() {
    const res = await this.dialog.open(EditUserDialogComponent, {
      data: this.user
    }).afterClosed().toPromise();
    if (res) {
      this.user = res;
      this.authService.getLoggedInUser$.next({ email: this.user.email, userId: this.user.userId });
      this.authService.setAuthUserInStorage({ email: this.user.email, userId: this.user.userId});
    }
  }

  toUserProfile() {
    this.router.navigateByUrl('users/profile')
  }

}
