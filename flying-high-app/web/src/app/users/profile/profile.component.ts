import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { AuthService } from 'src/app/shared/services/auth.service';
import { UsersAccountService } from 'src/app/shared/services/users-account.service';
import { EditUserDialogComponent } from '../edit-user-dialog/edit-user-dialog.component';
import { User } from '../user.interface';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss']
})
export class ProfileComponent implements OnInit {

  user: User;

  constructor(
    private userAccountService: UsersAccountService,
    private authService: AuthService,
    private dialog: MatDialog
  ) { }

  async ngOnInit() {
    const authUserId = this.authService.getLoggedInUser().userId;
    this.user = await this.userAccountService.getUser(authUserId).toPromise();
  }

  async openEditUserDialog() {
    const res = await this.dialog.open(EditUserDialogComponent, {
      data: this.user
    }).afterClosed().toPromise();
    if (res) {
      this.user = res;
      this.authService.getLoggedInUser$.next({ email: this.user.email, userId: this.user.userId });
      this.authService.setAuthUserInStorage({ email: this.user.email, userId: this.user.userId });
    }
  }

}
