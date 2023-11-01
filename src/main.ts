import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';

import { AppModule } from './app/app.module';
import { bootstrapApplication } from '@angular/platform-browser';
import { AppComponent } from './app/app.component';

// Bootstrap app through standalone option
bootstrapApplication(AppComponent).catch(err => console.error(err));

// Alternative option with AppModule
/*platformBrowserDynamic().bootstrapModule(AppModule)
  .catch(err => console.error(err));*/
