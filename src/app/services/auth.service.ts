import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { JwtHelperService } from '@auth0/angular-jwt';
import { Observable } from 'rxjs';

@Injectable({
    providedIn: 'root',
})
export class AuthService {
    private apiUrl = 'http://localhost:4000/api/auth';
    private jwtHelper = new JwtHelperService();

    constructor(private http: HttpClient) {}

    register(data: any): Observable<any> {
        return this.http.post(`${this.apiUrl}/register`, data);
    }

    login(data: any): Observable<any> {
        return this.http.post(`${this.apiUrl}/login`, data);
    }

    isAuthenticated(): boolean {
        const token = localStorage.getItem('token');
        return token ? !this.jwtHelper.isTokenExpired(token) : false;
    }

    getToken(): string | null {
        return localStorage.getItem('token');
    }

    getUserDetails(): any {
        const token = this.getToken();
        if (token) {
          const decodedToken = this.jwtHelper.decodeToken(token);
            if (decodedToken && decodedToken.exp > Date.now() / 1000) {
        return decodedToken;
             } else {
            return null;
            }
        }
        return null;
    }

    logout(): void {
        localStorage.removeItem('token');
    }
}
