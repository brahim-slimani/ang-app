
import { bootstrapApplication, provideProtractorTestingSupport } from '@angular/platform-browser';
import { AppComponent } from './app/app.component';
import { provideRouter } from '@angular/router';
import { routes } from './app/modules/app-routing.module';
import { HTTP_INTERCEPTORS, HttpClientModule } from '@angular/common/http';
import { importProvidersFrom } from '@angular/core';
import { CustomHttpInterceptor } from './app/modules/http-interceptor';
import { APP_BASE_HREF } from '@angular/common';
import { environment } from './environments/environment';


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
    },
    {
      provide: APP_BASE_HREF,
      useValue: environment.appBase
    },
  ]
}).catch(err => console.error(err));

// Alternative option with AppModule
/*platformBrowserDynamic().bootstrapModule(AppModule)
  .catch(err => console.error(err));*/
