import { HttpClientTestingModule } from '@angular/common/http/testing';
import { TestBed } from '@angular/core/testing';
import { of } from 'rxjs';
import { ApiService } from '../core';
import { AuthenticationService } from './authentication.service';
import { SignUpRequest } from './sign-up.request';
import { SignUpResponse } from './sign-up.response';
import createSpy = jasmine.createSpy;

describe('AuthenticationService', () => {
    let authenticationService: AuthenticationService;
    let mockApiService: ApiService = jasmine.createSpyObj(['post$']);

    beforeEach(async () => {
        await TestBed.configureTestingModule({
            imports: [HttpClientTestingModule],
            providers: [{ provide: ApiService, useValue: mockApiService }],
        }).compileComponents();

        authenticationService = TestBed.inject(AuthenticationService);
    });

    it('should sign up', (done: DoneFn) => {
        const response: SignUpResponse = {
            _id: 'abc123',
            firstName: 'John',
            lastName: 'Doe',
            email: 'test@test.test',
        };
        mockApiService.post$ = createSpy().and.returnValue(of(response));

        const request: SignUpRequest = {
            firstName: 'John',
            lastName: 'Doe',
            email: 'test@test.test',
            password: 'TestABC123',
        };

        authenticationService.signUp$(request).subscribe({
            next: (actualResponse: SignUpResponse) => {
                expect(mockApiService.post$).toHaveBeenCalledWith('https://demo-api.now.sh/users', request);
                expect(actualResponse).toEqual(response);
                done();
            },
        });
    });
});
