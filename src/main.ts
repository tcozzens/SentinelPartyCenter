import { bootstrap } from '@angular/platform-browser-dynamic';
import { enableProdMode, provide } from '@angular/core';
import { AppComponent, environment } from './app/';
import { APP_ROUTER_PROVIDERS } from './app/app.routes';
import { LocationStrategy, Location, HashLocationStrategy } from '@angular/common';

if (environment.production) {
  enableProdMode();
}

bootstrap(AppComponent, [
          APP_ROUTER_PROVIDERS,
          {provide: LocationStrategy, useClass: HashLocationStrategy}
          ]);
