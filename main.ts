import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
import { AppConfig } from './app/app.config';
import { AppComponent } from './app/app.component';
import { HttpInterceptor } from '@angular/common/http';

platformBrowserDynamic().bootstrapModule(AppConfig)
  .catch(err => console.error(err));
