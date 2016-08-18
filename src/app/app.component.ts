import { Component } from '@angular/core';
import { ROUTER_DIRECTIVES, RouterConfig, provideRouter, Router } from '@angular/router';
import { HomeComponent } from './home/home.component.ts';
import { GalleryComponent } from './gallery/gallery.component.ts';
import { ScheduleComponent } from './schedule/schedule.component.ts';

@Component({
  moduleId: module.id,
  selector: 'app',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.css'],
  directives: [ROUTER_DIRECTIVES]
})

export class AppComponent { 
  title = 'app works!';
}