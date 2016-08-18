import { provideRouter, RouterConfig }  from '@angular/router';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { GalleryComponent } from './gallery/gallery.component';
import { ScheduleComponent } from './schedule/schedule.component';
import { ContactComponent } from './contact/contact.component';

const routes: RouterConfig = [
  {
    path: 'home',
    component: HomeComponent
  },
  { 
    path: 'gallery', 
    component: GalleryComponent
  },
  { 
    path: 'schedule', 
    component: ScheduleComponent
  },
  { 
    path: 'contact', 
    component: ContactComponent
  },
  {
    path: '',
    redirectTo: '/home',
    pathMatch: 'full'
  }
];

export const APP_ROUTER_PROVIDERS = [
  provideRouter(routes)
];