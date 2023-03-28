import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private token: string = '';
  private userRole: string = '';

  constructor(private http: HttpClient, private router: Router) { }

  register(email: string, password: string) {
    const requestBody = { email, password };
    return this.http.post<{ token: string }>('/api/register', requestBody).subscribe(response => {
      this.token = response.token;
      this.userRole = this.getUserRoleFromToken(this.token);
      this.router.navigate(['/']);
    });
  }

  login(email: string, password: string) {
    const requestBody = { email, password };
    return this.http.post<{ token: string }>('/api/login', requestBody).subscribe(response => {
      this.token = response.token;
      this.userRole = this.getUserRoleFromToken(this.token);
      this.router.navigate(['/']);
    });
  }

  getToken() {
    return this.token;
  }

  getUserRole() {
    return this.userRole;
  }

  logout() {
    this.token = '';
    this.userRole = '';
    this.router.navigate(['/login']);
  }

  private getUserRoleFromToken(token: string) {
    // Implement logic to extract the user's role from the JWT token here
    return 'user';
  }
}
