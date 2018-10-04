import {HttpClient, HttpHeaders} from '@angular/common/http';
import {Injectable} from '@angular/core';
import {UserManager, UserManagerSettings, User, WebStorageStateStore} from 'oidc-client';
import { TouchSequence } from 'selenium-webdriver';

export function getClientSettings(): UserManagerSettings {
  return {
    authority: 'http://localhost:51866/',
    client_id: 'Angular_client',
    redirect_uri: 'http://localhost:4200/auth-callback',
    post_logout_redirect_uri: 'http://localhost:4200/logout-callback',
    response_type: 'id_token token',
    scope: 'openid profile MD.CoreApi custom.profile',
    filterProtocolClaims: true,
    loadUserInfo: true,
    userStore: new WebStorageStateStore({ store: window.localStorage })
  };
}

@Injectable()
export class AuthService {
  private url = 'http://localhost:49790/Account/';
  private manager = new UserManager(getClientSettings());
  private user: User = null;

  constructor(private http: HttpClient) {
    this.manager.getUser().then(user => {
      this.user = user;
    });
  }

  isLoggedIn(): boolean {
    return this.user != null && !this.user.expired;
  }

  getClaims(): any {
    return this.user.profile;
  }

  getAuthorizationHeaderValue(): string {
    if (this.user != null) {
      return `${this.user.token_type} ${this.user.access_token}`;
    }
    return null;
  }

  authenticate() {
    this.manager.signinRedirect();
    return this.manager.signinRedirectCallback().then(user => {
      this.user = user;
    });
  }

  startAuthentication(): Promise<void> {
    return this.manager.signinRedirect();
  }

  completeAuthentication(): Promise<void> {
    return this.manager.signinRedirectCallback().then(user => {
      this.user = user;
    });
  }

  startLogout(): Promise<void> {
    return this.manager.signoutRedirect();
  }

  completeLogout(): Promise<void> {
    return this.manager.signoutRedirectCallback().then(user => {
      this.user = null;
    });
  }

  // login(email: string, password: string) {
  //   const myHeaders = new HttpHeaders().set('Content-Type', 'application/json');
  //
  //   return this.http.post(this.url + 'Login', JSON.stringify({ email, password }),
  //     { headers: myHeaders, responseType: 'text'});
  // }
  //
  register(email: string, password: string) {
    const myHeaders = new HttpHeaders().set('Content-type', 'application/json');

    return this.http.post('https://localhost:51870/account/register', JSON.stringify({ email, password }),
      { headers: myHeaders, responseType: 'json'});
  }
}
