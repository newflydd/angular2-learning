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
var user_service_1 = require('./user.service');
var log_service_1 = require('./log.service');
var MyAppComponent = (function () {
    function MyAppComponent(userService, logger) {
        this.userService = userService;
        this.logger = logger;
        this.user = userService.user;
    }
    MyAppComponent.prototype.changeAtho = function () {
        this.logger.log('changing user authorized');
        this.userService.changeUserAuthorized();
    };
    MyAppComponent = __decorate([
        core_1.Component({
            selector: 'my-app',
            template: "\n\t\t<h1>Heroes</h1>\n\t\t<hero-comp id=\"auth\" *ngIf=\"user.isAuthorized\"></hero-comp>\n\t\t<hero-comp id=\"unauth\" *ngIf=\"!user.isAuthorized\"></hero-comp>\n\t\t<h2>User's Athorized:{{user.isAuthorized}}</h2>\n\t\t<button (click)=\"changeAtho();\" class=\"btn btn-primary\">Change Autho</button>\n\t"
        }), 
        __metadata('design:paramtypes', [user_service_1.UserService, log_service_1.LoggerService])
    ], MyAppComponent);
    return MyAppComponent;
}());
exports.MyAppComponent = MyAppComponent;
//# sourceMappingURL=myapp.component.js.map