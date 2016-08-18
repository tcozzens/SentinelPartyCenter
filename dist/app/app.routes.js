"use strict";
var router_1 = require('@angular/router');
var home_component_1 = require('./home/home.component');
var gallery_component_1 = require('./gallery/gallery.component');
var schedule_component_1 = require('./schedule/schedule.component');
var contact_component_1 = require('./contact/contact.component');
var routes = [
    {
        path: 'home',
        component: home_component_1.HomeComponent
    },
    {
        path: 'gallery',
        component: gallery_component_1.GalleryComponent
    },
    {
        path: 'schedule',
        component: schedule_component_1.ScheduleComponent
    },
    {
        path: 'contact',
        component: contact_component_1.ContactComponent
    },
    {
        path: '',
        redirectTo: '/home',
        pathMatch: 'full'
    }
];
exports.APP_ROUTER_PROVIDERS = [
    router_1.provideRouter(routes)
];
//# sourceMappingURL=app.routes.js.map