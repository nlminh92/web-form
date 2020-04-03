import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, Router } from '@angular/router';

@Injectable({
    providedIn: 'root'
})
export class AuthGuard implements CanActivate {

    constructor(private router: Router) {}

    canActivate(
        next: ActivatedRouteSnapshot,
        state: RouterStateSnapshot): boolean {
        const url: string = state.url;

        return this.checkLogin(url);
    }

    checkLogin(url: string): boolean {
        if (this.checkIsLoggedIn() ) { return true; }
        this.router.navigate(['/login']);
        return false;
    }

    checkIsLoggedIn(): boolean {

        const userInfo = localStorage.getItem('user');
        let isLoged = true;

        if (userInfo === undefined || userInfo === null) {
            isLoged = false;
        }

        return isLoged;
    }
}
