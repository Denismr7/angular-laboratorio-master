import { Injectable, Output, EventEmitter } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  @Output() logged: EventEmitter<boolean> = new EventEmitter(false);
  @Output() username: EventEmitter<string> = new EventEmitter();

  constructor() {}

  login(username: string, password: string): boolean {
    if (username === 'Usuario' && password === '123') {
      this.logged.emit(true);
      this.username.emit(username);
      return true;
    }
    return false;
  }

  logout(): void {
    this.logged.emit(false);
  }

  isLogged(): EventEmitter<boolean> {
    return this.logged
  }

  getUsername(): EventEmitter<string> {
    return this.username
  }
}
