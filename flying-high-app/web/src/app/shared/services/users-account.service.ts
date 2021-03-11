import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Flight } from 'src/app/search/flight.interface';
import { User, UserDto } from 'src/app/users/user.interface';
import { environment } from 'src/environments/environment';
import { UsersAccount } from '../../users/users-account.interface';

@Injectable({
  providedIn: 'root'
})
export class UsersAccountService {

  url = `${environment.API_URL}/api/users`;

  constructor(private http: HttpClient) { }

  getUserAccount(email: string): Observable<{ userAccount: UsersAccount[], totalPoints: number }> {
    return this.http.get<{ userAccount: UsersAccount[], totalPoints: number }>(`${this.url}/flights?email=${email}`);
  }

  getUser(userId: string) {
    return this.http.get<User>(`${this.url}/id?userId=${userId}`);
  }

  updateUser(userId: string, user: UserDto) {
    return this.http.put<User>(`${this.url}?userId=${userId}`, user);
  }

}
