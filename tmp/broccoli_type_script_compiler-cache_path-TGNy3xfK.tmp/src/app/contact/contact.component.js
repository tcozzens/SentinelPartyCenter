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
var http_1 = require('@angular/http');
var contact_service_1 = require('./contact.service');
var ContactComponent = (function () {
    function ContactComponent(_contactService) {
        this._contactService = _contactService;
        this.message = { name: '', email: '', message: '' };
    }
    ContactComponent.prototype.ngOnInit = function () {
    };
    ContactComponent.prototype.onSubmit = function () {
        var _this = this;
        this._contactService.postEmail(this.message).subscribe(function (response) { return _this.handleResponse(response); }, function (error) { return _this.handleResponse(error); });
    };
    ContactComponent.prototype.handleResponse = function (response) {
        // console.log(`msg is: {response.status}`);
        if (response.status == 'success') {
            this.message = { name: '', email: '', message: '' };
            alert('We should receive your email shortly');
        }
        if (response.status == 'error') {
            alert('There was an error processing your request. Please try again later.');
        }
    };
    ContactComponent = __decorate([
        core_1.Component({
            moduleId: module.id,
            selector: 'contact',
            templateUrl: 'contact.component.html',
            styleUrls: ['contact.component.css'],
            providers: [contact_service_1.ContactService, http_1.Http, http_1.HTTP_PROVIDERS]
        }), 
        __metadata('design:paramtypes', [contact_service_1.ContactService])
    ], ContactComponent);
    return ContactComponent;
}());
exports.ContactComponent = ContactComponent;
//# sourceMappingURL=contact.component.js.map