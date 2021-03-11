import { Component, Inject, OnInit } from '@angular/core';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { AuthService } from 'src/app/shared/services/auth.service';
import { UsersAccountService } from 'src/app/shared/services/users-account.service';
import { User, UserDto } from '../user.interface';

@Component({
  selector: 'app-edit-user-dialog',
  templateUrl: './edit-user-dialog.component.html',
  styleUrls: ['./edit-user-dialog.component.scss']
})
export class EditUserDialogComponent implements OnInit {

  constructor(
    @Inject(MAT_DIALOG_DATA) public user: User,
    private userService: UsersAccountService,
    private authService: AuthService,
    private dialogRef: MatDialogRef<EditUserDialogComponent>
  ) { }

  ngOnInit(): void {
  }

  async editUser(user: UserDto) {
    const userId = this.authService.getLoggedInUser().userId;
    const updatedUser = await this.userService.updateUser(userId, user).toPromise();
    if (updatedUser) {
      this.dialogRef.close(updatedUser);
    }
  }

}
