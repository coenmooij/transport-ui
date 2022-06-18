import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from '../../environments';
import { ApiService } from '../core';
import { SignUpRequest } from './sign-up.request';
import { WEBSERVICES } from './webservices';

@Injectable({
    providedIn: 'root',
})
export class AuthenticationService {
    constructor(private apiService: ApiService) {}

    public signUp$(request: SignUpRequest): Observable<void> {
        return this.apiService.post$(environment.apiBaseUrl + WEBSERVICES.REGISTER, request);
    }
}
