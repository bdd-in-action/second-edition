import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { Observable, Subject } from 'rxjs';
import { AuthUser, loggedInUser } from 'src/app/login/auth-user.interface';
import { User } from 'src/app/users/user.interface';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  url = `${environment.API_URL}/api/auth`;
  getLoggedInUser$ = new Subject<loggedInUser>();

  constructor(
    private http: HttpClient,
    private router: Router,
    private toastr: ToastrService
  ) { }

  isLogin() {
    const token = localStorage.getItem('token');
    return token ? true : false;
  }

  async login(authUser: AuthUser) {
    const auth: any = await this.http.post(`${this.url}/login`, authUser).toPromise();
    if (auth && auth.access_token) {
      localStorage.setItem('token', auth.access_token);
      localStorage.setItem('authUser', JSON.stringify({ email: auth.email, userId: auth.userId, points: auth.points }));
      this.toastr.success(`Logged in as ${auth.email}`)
      this.getLoggedInUser$.next({ email: auth.email, userId: auth.userId });
      this.router.navigate(['search']);
    }
  }

  setAuthUserInStorage(loggedInUser: loggedInUser) {
    localStorage.setItem('authUser', JSON.stringify({ email: loggedInUser.email, userId: loggedInUser.userId }))
  }

  async register(authUser: AuthUser): Promise<User> {
    try {
      const registeredUser = await this.http.post<User>(`${this.url}/register`, authUser).toPromise();
      if (registeredUser.userId) {
        this.toastr.success(`User: ${registeredUser.email} registered successfully`);
        this.router.navigateByUrl('login');
      }
      return registeredUser;
    } catch (e) {
      if (e.error.statusCode === 400) {
        this.toastr.error(e.error.error);
      }
    }
  }

  logout() {
    localStorage.removeItem('token');
    localStorage.removeItem('authUser');
    this.router.navigate(['login']);
  }

  getLoggedInUser(): loggedInUser {
    return JSON.parse(localStorage.getItem('authUser'));
  }

  getToken(): string {
    return localStorage.getItem('token');
  }

}