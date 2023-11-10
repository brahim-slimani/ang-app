import { Injectable } from "@angular/core";

@Injectable({
    providedIn: 'root'
})
export class JWTWorkerService {

    TOKEN_KEY = "auth_token";

    persistTokenInStorage(token: string) {
        localStorage.setItem(this.TOKEN_KEY, token);
    }

    retrieveToken() {
        return localStorage.getItem(this.TOKEN_KEY);
    }

    isAuthenticated() {
        return this.retrieveToken() ? true : false;
    }

    deleteToken() {
        localStorage.removeItem(this.TOKEN_KEY);
    }


}