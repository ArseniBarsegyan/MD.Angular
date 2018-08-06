import {HttpClient, HttpHeaders} from '@angular/common/http';
import {Injectable} from '@angular/core';

@Injectable()
export class AuthService {
  token: string;
  private url = 'http://localhost:51869/Account/';

  constructor(private http: HttpClient) {
  }

  login(name: string, password: string) {
    const myHeaders = new HttpHeaders().set('Content-Type', 'application/json');

    return this.http.post(this.url + 'Login', JSON.stringify({ name, password }),
      { headers: myHeaders, responseType: 'json'});
  }

  register(email: string, password: string) {
    const myHeaders = new HttpHeaders().set('Content-type', 'application/json');

    return this.http.post(this.url + 'Register', JSON.stringify({ email, password }),
      { headers: myHeaders});
  }

  getToken() {
    return this.token;
  }
}
