import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';

import { bootstrapApplication, provideProtractorTestingSupport } from '@angular/platform-browser';
import { AppComponent } from './app/app.component';
import { provideRouter } from '@angular/router';
import { routes } from './app/app-routing.module';


// Bootstrap app through standalone option
bootstrapApplication(AppComponent, {
  //With routing module
  providers: [
    provideProtractorTestingSupport(),
    provideRouter(routes)
  ]
}).catch(err => console.error(err));

// Alternative option with AppModule
/*platformBrowserDynamic().bootstrapModule(AppModule)
  .catch(err => console.error(err));*/
