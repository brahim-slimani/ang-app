import { HttpEvent, HttpHandler, HttpInterceptor, HttpRequest } from "@angular/common/http";
import { Injectable, inject } from "@angular/core";
import { Observable } from "rxjs";
import { JWTWorkerService } from "../services/jwt-worker.service";

@Injectable({
    providedIn: 'root'
})
export class CustomHttpInterceptor implements HttpInterceptor {

    jwtWorker: JWTWorkerService = inject(JWTWorkerService);

    intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
        const modifiedReq = req.clone({
            setHeaders: {
                'Authorization': `Bearer ${this.jwtWorker.retrieveToken()}` 
            }
        });
        return next.handle(modifiedReq);
    }
}