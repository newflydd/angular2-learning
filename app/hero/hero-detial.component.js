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
require('rxjs/add/operator/switchMap');
var core_1 = require('@angular/core');
var router_1 = require('@angular/router');
var common_1 = require('@angular/common');
var hero_service_1 = require('./service/hero.service');
var HeroDetialComponent = (function () {
    function HeroDetialComponent(heroService, route, location) {
        this.heroService = heroService;
        this.route = route;
        this.location = location;
    }
    HeroDetialComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.route.params.subscribe(function (params) {
            _this.heroService.getHeroById(params['id']).then(function (hero) { return _this.hero = hero; });
        });
    };
    HeroDetialComponent.prototype.goBack = function () {
        this.location.back();
    };
    HeroDetialComponent = __decorate([
        core_1.Component({
            moduleId: module.id,
            selector: 'hero-detial',
            template: "\n\t<div *ngIf=\"hero\">\n\t\t<h2>{{hero.name}} details:</h2>\n\t\t<div>\n\t\t\t<label>id: </label>{{hero.id}}\n\t\t</div>\n\t\t<div>\n\t\t\t<label>name: </label>\n\t\t\t<input placeholder=\"name\" value=\"{{hero.name}}\"/>\n\t\t</div>\n\t\t<button (click)=\"goBack()\">Back</button>\n\t</div>\n\t",
            providers: [hero_service_1.HeroService]
        }), 
        __metadata('design:paramtypes', [hero_service_1.HeroService, router_1.ActivatedRoute, common_1.Location])
    ], HeroDetialComponent);
    return HeroDetialComponent;
}());
exports.HeroDetialComponent = HeroDetialComponent;
//# sourceMappingURL=hero-detial.component.js.map