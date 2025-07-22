import { Injectable, signal } from '@angular/core';
import { Router } from '@angular/router';
@Injectable({
  providedIn: 'root'
})
export class Auth {
  private readonly _isLoggedIn = signal<boolean>(false);

  constructor(private router: Router) {
    const stored = localStorage.getItem('isLoggedIn');
    this._isLoggedIn.set(stored === 'true');
  }

  isLoggedIn(): boolean {
    return this._isLoggedIn();
  }


  login(username: string, password: string): boolean {
    if (username === 'admin' && password === 'password') {
      this._isLoggedIn.set(true);
      localStorage.setItem('isLoggedIn', 'true');
      return true;
    }
    localStorage.setItem('isLoggedIn', 'false');
    return false;
  }
  logout(): void {
    this._isLoggedIn.set(false);
    localStorage.removeItem('isLoggedIn');
    this.router.navigate(['/']);
  }

}
