import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { SearchComponent } from './search/search/search.component';
import { AuthGuard } from './shared/guard/auth.guard';
import { WelcomeComponent } from './welcome/welcome.component';


const routes: Routes = [
  { path: 'login', component: LoginComponent },
  { path: 'register', component: RegisterComponent },
  { path: '', component: WelcomeComponent, pathMatch: 'full' },
  {
    path: 'search',
    loadChildren: () => import('./search/search.module').then(m => m.SearchModule),
    canActivate: [AuthGuard]
  },
  {
    path: 'bookings',
    loadChildren: () => import('./booking/booking.module').then(m => m.BookingModule),
    canActivate: [AuthGuard]
  },
  {
    path: 'users',
    loadChildren: () => import('./users/users.module').then(m => m.UsersModule),
    canActivate: [AuthGuard]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
