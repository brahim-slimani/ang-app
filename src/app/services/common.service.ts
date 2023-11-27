import { Injectable } from "@angular/core";
import { BehaviorSubject } from "rxjs";


@Injectable({
    providedIn: 'root'
})
export class CommonService {

    private themeState = new BehaviorSubject<string>(localStorage.getItem("theme") || "light");
    themeState$ = this.themeState.asObservable();

    updateThemeState(newState: string): void {
        this.themeState.next(newState);
        localStorage.setItem("theme", newState);
    }

}