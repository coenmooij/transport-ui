import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from '../../environments';
import { ApiService } from '../core';
import { SignUpRequest } from './sign-up.request';
import { SignUpResponse } from './sign-up.response';
import { WEBSERVICES } from './webservices';

@Injectable({
    providedIn: 'root',
})
export class AuthenticationService {
    constructor(private apiService: ApiService) {}

    public signUp$(request: SignUpRequest): Observable<SignUpResponse> {
        return this.apiService.post$<SignUpResponse>(environment.apiBaseUrl + WEBSERVICES.REGISTER, request);
    }
}
