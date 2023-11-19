
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
import { AppModule } from './app/modules/app-module';

platformBrowserDynamic().bootstrapModule(AppModule)
  .catch(err => console.error(err));

// // Bootstrap app through standalone based app component 
// bootstrapApplication(AppComponent, {
//   providers: [
//     provideProtractorTestingSupport(),
//     provideRouter(routes),
//     importProvidersFrom(HttpClientModule),
//     {
//       provide: HTTP_INTERCEPTORS,
//       useClass: CustomHttpInterceptor,
//       multi: true
//     },
//     {
//       provide: LocationStrategy,
//       useClass: HashLocationStrategy
//     }
//   ]
// }).catch(err => console.error(err));
