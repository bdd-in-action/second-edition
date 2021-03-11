import { Component } from '@angular/core';
import { AuthService } from '../shared/services/auth.service';
import { UserDto } from '../users/user.interface';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent {

 
  constructor(
    private authService: AuthService
  ) { }

  async register(user: UserDto) {
    this.authService.register(user);
  }

}
