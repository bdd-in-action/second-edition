import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UsersComponent } from './users.component';
import { UsersRoutingModule } from './users-routing.module';
import { MaterialModules } from '../shared/material-modules';
import { EditUserDialogComponent } from './edit-user-dialog/edit-user-dialog.component';
import { SharedModule } from '../shared/shared.module';
import { ProfileComponent } from './profile/profile.component';

@NgModule({
  declarations: [UsersComponent, EditUserDialogComponent, ProfileComponent],
  imports: [
    CommonModule,
    UsersRoutingModule,
    MaterialModules,
    SharedModule
  ]
})
export class UsersModule { }
