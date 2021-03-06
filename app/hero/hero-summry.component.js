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
var router_1 = require('@angular/router');
var hero_entity_1 = require('./hero.entity');
var HeroSummryComponent = (function () {
    function HeroSummryComponent(router) {
        this.router = router;
    }
    HeroSummryComponent.prototype.gotoDetail = function () {
        this.router.navigate(['/detail', this.hero.id]);
    };
    __decorate([
        core_1.Input(), 
        __metadata('design:type', hero_entity_1.Hero)
    ], HeroSummryComponent.prototype, "hero", void 0);
    HeroSummryComponent = __decorate([
        core_1.Component({
            selector: 'hero-summry',
            template: "\n\t\t<label>{{hero.id}} : {{hero.name}}</label>\n\t\t<label>{{hero.alterName}}</label>\n\t\t<label>{{hero.skillIndex}}</label>\n\t\t<button class=\"btn btn-primary\" (click)=\"gotoDetail()\">view detial</button>\n\t"
        }), 
        __metadata('design:paramtypes', [router_1.Router])
    ], HeroSummryComponent);
    return HeroSummryComponent;
}());
exports.HeroSummryComponent = HeroSummryComponent;
//# sourceMappingURL=hero-summry.component.js.map