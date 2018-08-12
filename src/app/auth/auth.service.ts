import {HttpClient, HttpHeaders} from '@angular/common/http';
import {Injectable} from '@angular/core';

@Injectable()
export class AuthService {
  private url = 'http://localhost:8300/Account/';
  token: string;

  constructor(private http: HttpClient) {
  }

  login(email: string, password: string) {
    const myHeaders = new HttpHeaders().set('Content-Type', 'application/json');

    this.http.post(this.url + 'Login', JSON.stringify({ email, password }),
      { headers: myHeaders, responseType: 'text'})
      .subscribe((token) => {
          this.token = token;
        },
        (error) => {
          console.log(error);
        }
      );
  }

  register(email: string, password: string) {
    const myHeaders = new HttpHeaders().set('Content-type', 'application/json');

    this.http.post(this.url + 'Register', JSON.stringify({ email, password }),
      { headers: myHeaders, responseType: 'text'})
      .subscribe((token) => {
        this.token = token;
      },
      (error) => {
        console.log(error);
      }
    );
  }

  getToken() {
    return this.token;
  }

  isAuthenticated() {
    return this.token != null;
  }

  logout() {
    this.token = null;
  }
}
