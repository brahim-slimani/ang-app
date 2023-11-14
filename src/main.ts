import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';

import { bootstrapApplication, provideProtractorTestingSupport } from '@angular/platform-browser';
import { AppComponent } from './app/app.component';
import { provideRouter } from '@angular/router';
import { routes } from './app/modules/app-routing.module';
import { HTTP_INTERCEPTORS, HttpClient, HttpClientModule } from '@angular/common/http';
import { importProvidersFrom } from '@angular/core';
import { CustomHttpInterceptor } from './app/modules/http-interceptor';


// Bootstrap app through standalone option
bootstrapApplication(AppComponent, {
  //With routing module
  providers: [
    provideProtractorTestingSupport(),
    provideRouter(routes),
    importProvidersFrom(HttpClientModule),
    {
      provide: HTTP_INTERCEPTORS,
      useClass: CustomHttpInterceptor,
      multi: true
    }
  ]
}).catch(err => console.error(err));

// Alternative option with AppModule
/*platformBrowserDynamic().bootstrapModule(AppModule)
  .catch(err => console.error(err));*/
