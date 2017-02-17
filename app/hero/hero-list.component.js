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
var hero_entity_1 = require('./hero.entity');
var hero_service_1 = require('./service/hero.service');
var HeroListComponent = (function () {
    function HeroListComponent(heroService) {
        this.heroService = heroService;
        this.onHeroChange = new core_1.EventEmitter();
    }
    //默认调用方法，在视图展现后会调用
    HeroListComponent.prototype.ngAfterViewInit = function () {
        var _this = this;
        //使用服务提供的承诺机制
        this.heroService.getHeroes().then(function (heroes) {
            _this.heroes = heroes;
        });
    };
    HeroListComponent.prototype.selectHero = function (hero) {
        if (this.hero != hero) {
            this.hero = hero;
            //弹射事件
            this.onHeroChange.emit(hero);
        }
    };
    __decorate([
        core_1.Input(), 
        __metadata('design:type', hero_entity_1.Hero)
    ], HeroListComponent.prototype, "hero", void 0);
    __decorate([
        core_1.Output(), 
        __metadata('design:type', Object)
    ], HeroListComponent.prototype, "onHeroChange", void 0);
    HeroListComponent = __decorate([
        core_1.Component({
            selector: 'hero-list',
            template: "\n\t\t<hero-summry *ngIf=\"hero\" [hero]=\"hero\"></hero-summry>\n\t\t<ul class=\"heroes\">\n\t\t\t<li class=\"hero\" *ngFor=\"let itHero of heroes\" (click)=\"selectHero(itHero)\" [class.selected]=\"hero===itHero\">\n\t\t\t<span class=\"hero-id\">{{itHero.id}}</span>{{itHero.name}}\n\t\t\t</li>\n\t\t</ul>\n\t",
            styles: ["\n\t\t.hero{\n\t\t\tbackground-color:#798d9b;\n\t\t\tborder-radius:4px;\n\t\t\twidth:200px;\n\t\t\tmargin-top:10px;\n\t\t\tcolor:#EEE;\n\t\t\tfont-size:18px;\n\t\t\tlist-style:none;\n\t\t\theight:40px;\n\t\t\tline-height:40px;\n\t\t\tcursor:pointer;\n\t\t}\n\t\t.hero:hover{\n\t\t\tcolor:#607d8b;\n\t\t\tbackground-color:#ddd;\n\t\t}\n\t\t.hero .hero-id{\n\t\t\tbackground-color:#607d8b;\n\t\t\tcolor:#FFF;\n\t\t\tmargin-right:5px;\n\t\t\tfont-size:18px;\n\t\t\tborder-radius:4px;\n\t\t\tborder-top-right-radius:0px;\n\t\t\tborder-bottom-right-radius:0px;\n\t\t\tpadding:9px 10px;\n\t\t}\n\t\t.selected{\n\t\t\tcolor:#ffffd6;\n\t\t\tbackground-color:#506d7b;\n\t\t}\n\t"],
            providers: [hero_service_1.HeroService]
        }), 
        __metadata('design:paramtypes', [hero_service_1.HeroService])
    ], HeroListComponent);
    return HeroListComponent;
}());
exports.HeroListComponent = HeroListComponent;
//# sourceMappingURL=hero-list.component.js.map