import { Injectable, inject } from "@angular/core";
import { ActivatedRouteSnapshot, CanActivateFn, Router, RouterStateSnapshot } from "@angular/router";
import { JWTWorkerService } from "../services/jwt-worker.service";


/**
 * Deprecated implementation, use functional injection instead
export class AuthGuard implements CanActivate {

    constructor(private jwtWorkerService: JWTWorkerService, private router: Router) { }

    canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean | UrlTree | Observable<boolean | UrlTree> | Promise<boolean | UrlTree> {
        if (this.jwtWorkerService.isAuthenticated()) {
            return true;
        } else {
            this.router.navigate(['/login']);
            return false;
        }
    }

}*/

