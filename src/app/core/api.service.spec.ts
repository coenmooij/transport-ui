import { HttpClient } from '@angular/common/http';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { TestBed } from '@angular/core/testing';
import { of } from 'rxjs';
import { ApiService } from '../core';
import createSpy = jasmine.createSpy;

describe('AuthenticationService', () => {
    let apiService: ApiService;
    let mockHttpClient: HttpClient = jasmine.createSpyObj(['post']);

    beforeEach(async () => {
        await TestBed.configureTestingModule({
            imports: [HttpClientTestingModule],
            providers: [{ provide: HttpClient, useValue: mockHttpClient }],
        }).compileComponents();

        apiService = TestBed.inject(ApiService);
    });

    it('should handle post$', (done: DoneFn) => {
        mockHttpClient.post = createSpy().and.returnValue(of({ test: true }));

        apiService.post$('/test', { data: false }).subscribe({
            next: (response: any) => {
                expect(mockHttpClient.post).toHaveBeenCalledWith('/test', { data: false });
                expect(response).toEqual({ test: true });
                done();
            },
        });
    });
});
