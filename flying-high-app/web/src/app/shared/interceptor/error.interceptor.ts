import { Injectable } from '@angular/core';
import { HttpRequest, HttpHandler, HttpEvent, HttpInterceptor, HttpErrorResponse } from '@angular/common/http';
import { Observable, throwError, of } from 'rxjs';
import { catchError } from 'rxjs/operators';

import { Router } from '@angular/router';
import { AuthService } from '../services/auth.service';
import { ToastrService } from 'ngx-toastr';

@Injectable()
export class ErrorInterceptor implements HttpInterceptor {
    constructor(
        private router: Router,
        private toastr: ToastrService,
        private authService: AuthService
    ) { }

    intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
        return next.handle(request).pipe(catchError(err => this.handleUnauthorizedError(err)))
    }

    private handleUnauthorizedError(err: HttpErrorResponse): Observable<any> {
        if (err.status === 401) {
            this.toastr.error('Invalid email or password');
            this.authService.logout();
        } else if (err.status === 400) {
            this.toastr.error(err.error.error);
        } else {
            return throwError(err);
        }
    }
}
