import { HttpErrorResponse, HttpEvent, HttpHandler, HttpInterceptor, HttpRequest } from "@angular/common/http";
import { Injectable, inject } from "@angular/core";
import { Observable, tap } from "rxjs";
import { JWTWorkerService } from "../services/jwt-worker.service";
import { AuthService } from "../services/auth.service";

@Injectable({
    providedIn: 'root'
})
export class CustomHttpInterceptor implements HttpInterceptor {

    jwtWorker: JWTWorkerService = inject(JWTWorkerService);
    authService: AuthService = inject(AuthService);

    intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
        const modifiedReq = req.clone({
            setHeaders: {
                'Authorization': `Bearer ${this.jwtWorker.retrieveToken()}` 
            }
        });
        return next.handle(modifiedReq).pipe(
            tap(
                (event: HttpEvent<any>) => {}, (error: any) => {
                    if(error instanceof HttpErrorResponse && error.status === 401) {
                        this.authService.logout();
                    }
                }
            )
        );
    }
}