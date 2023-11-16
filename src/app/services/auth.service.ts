import { HttpClient } from "@angular/common/http";
import { Injectable, inject } from "@angular/core";
import { Observable } from "rxjs";
import { environment } from "src/environments/environment";
import { Credential } from "../interfaces/credential";
import { JWTWorkerService } from "./jwt-worker.service";
import { ActivatedRouteSnapshot, CanActivateFn, Router, RouterStateSnapshot } from "@angular/router";

@Injectable({
    providedIn: 'root'
})
export class AuthService {

    constructor(private httpClient: HttpClient, private router: Router, private jwtWorker: JWTWorkerService) { }

    login(credential: Credential): Observable<any> {
        return this.httpClient.request('POST', `${environment.apiUrl}/auth/login`, { body: JSON.stringify(credential), headers: { 'Content-Type': 'application/json' } })
    }

    logout() {
        this.jwtWorker.deleteToken();
        this.router.navigateByUrl('/login');
    }

    canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean {
        if (this.jwtWorker.isAuthenticated()) {
            return true;
        } else {
            this.router.navigate(['/login']);
            return false;
        } 
    }
}

export const AuthGuard: CanActivateFn = (route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean => {
    return inject(AuthService).canActivate(route, state);
}

