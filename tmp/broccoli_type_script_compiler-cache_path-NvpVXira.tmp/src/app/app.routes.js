"use strict";
var router_1 = require('@angular/router');
var home_component_1 = require('./home/home.component');
var gallery_component_1 = require('./gallery/gallery.component');
var routes = [
    {
        path: '',
        component: home_component_1.HomeComponent,
        pathMatch: 'full'
    },
    {
        path: './gallery',
        component: gallery_component_1.GalleryComponent
    }
];
exports.appRouterProviders = [
    router_1.provideRouter(routes)
];
//# sourceMappingURL=app.routes.js.map