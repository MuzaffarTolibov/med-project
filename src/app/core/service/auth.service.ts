import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

const API_URL = `${DOMAIN}/auth/login`

interface Auth {
  login: string;
  password: string;
}

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private readonly http: HttpClient) { }

  userAuth(login: string, password: string): any {
    const body: Auth = { login, password }

    return this.http.post(DOMAIN, body);
  }
}
