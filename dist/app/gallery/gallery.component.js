"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var core_1 = require('@angular/core');
var GalleryComponent = (function () {
    function GalleryComponent() {
        this.pictures = [
            { id: 0, path: './Images/1.jpg' },
            { id: 1, path: './Images/2.jpg' },
            { id: 2, path: './Images/3.jpg' },
            { id: 3, path: './Images/4.jpg' },
            { id: 4, path: './Images/5.jpg' },
            { id: 5, path: './Images/6.jpg' },
            { id: 6, path: './Images/7.jpg' },
            { id: 7, path: './Images/8.jpg' },
            { id: 8, path: './Images/9.jpg' },
            { id: 9, path: './Images/10.jpg' },
            { id: 10, path: './Images/11.jpg' },
            { id: 11, path: './Images/12.jpg' },
            { id: 12, path: './Images/13.jpg' },
            { id: 13, path: './Images/14.jpg' },
            { id: 14, path: './Images/15.jpg' }
        ];
        this.displayPicture = this.pictures[0];
    }
    GalleryComponent.prototype.ngOnInit = function () {
    };
    GalleryComponent.prototype.previousImage = function (id) {
        if (id == 0) {
            id = this.pictures.length - 1;
        }
        else {
            id = id - 1;
        }
        this.displayPicture = this.pictures[id];
    };
    GalleryComponent.prototype.nextImage = function (id) {
        id = id + 1;
        if (id == this.pictures.length) {
            id = 0;
        }
        this.displayPicture = this.pictures[id];
    };
    GalleryComponent.prototype.switchImage = function (id) {
        this.displayPicture = this.pictures[id];
    };
    GalleryComponent = __decorate([
        core_1.Component({
            moduleId: module.id,
            selector: 'gallery',
            templateUrl: 'gallery.component.html',
            styleUrls: ['gallery.component.css']
        }), 
        __metadata('design:paramtypes', [])
    ], GalleryComponent);
    return GalleryComponent;
}());
exports.GalleryComponent = GalleryComponent;
//# sourceMappingURL=gallery.component.js.map