import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { environment } from "src/environments/environment";
import { Credential } from "../interfaces/credential";

@Injectable({
    providedIn: 'root'
})
export class AuthService {

    constructor(private httpClient: HttpClient) { }

    login(credential: Credential): Observable<any> {
        return this.httpClient.request('POST', `${environment.apiUrl}/auth/login`, { body: JSON.stringify(credential), headers: { 'Content-Type': 'application/json' } })
    }

}