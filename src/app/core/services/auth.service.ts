import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { HttpClient } from '@angular/common/http';
import { tap } from 'rxjs';
import jwtDecode from 'jwt-decode';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private readonly apiUrl = environment.apiUrl;
  private controller = 'auth';

  constructor(private http: HttpClient) { }

  login(rut: string, password: string){
    return this.http.post<any>(`${this.apiUrl}/${this.controller}/login`, {rut, password}).pipe(
      tap((res) => {
        localStorage.setItem('token', res.token);
        localStorage.setItem('role', res.user.role);
        localStorage.setItem('id', res.user.id);
      })
    );
  }

    isLoggedIn(): boolean {
    const token = localStorage.getItem('token');
    if (!token) {
      return false;
    }

    const isExpired = this.isTokenExpired(token);
    if (isExpired) {
      this.logout();
      return false;
    }
    return true;
  }

    isTokenExpired(token: string): boolean {
    try {
      const decodedToken: any = jwtDecode(token);
      const currentTime = Math.floor(Date.now() / 1000);
      return decodedToken.exp < currentTime;
    } catch (error) {
      console.error(error);
      return true;
    }
  }

    getToken() {
    const token = localStorage.getItem('token');
    return token;
  }

    logout(): boolean {
    if (localStorage.getItem('token')) {
      localStorage.removeItem('token');
      return true;
    }
    return false;
  }

}

