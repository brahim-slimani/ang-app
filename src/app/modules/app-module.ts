import { LocationStrategy, HashLocationStrategy } from "@angular/common";
import { HttpClientModule, HTTP_INTERCEPTORS } from "@angular/common/http";
import { NgModule, importProvidersFrom } from "@angular/core";
import { BrowserModule, provideProtractorTestingSupport } from "@angular/platform-browser";
import { AppComponent } from "../app.component";
import { AppRoutingModule } from "./app-routing.module";
import { CustomHttpInterceptor } from "../core/interceptors/http-interceptor";
import { HeaderComponent } from "../shared/header/header.component";
import { FooterComponent } from "../shared/footer/footer.component";
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ThemeSwitcherComponent } from "../shared/theme-switcher/theme-switcher.component";

@NgModule({
    declarations: [AppComponent],
    providers: [
        provideProtractorTestingSupport(),
        importProvidersFrom(HttpClientModule),
        {
            provide: HTTP_INTERCEPTORS,
            useClass: CustomHttpInterceptor,
            multi: true
        },
        {
            provide: LocationStrategy,
            useClass: HashLocationStrategy
        }
    ],
    bootstrap: [AppComponent],
    imports: [BrowserModule, AppRoutingModule, HeaderComponent, FooterComponent, BrowserAnimationsModule, ThemeSwitcherComponent]
})
  export class AppModule {}