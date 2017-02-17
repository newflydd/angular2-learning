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
var HEROS_data_1 = require('./HEROS.data');
var log_service_1 = require('./log.service');
//注入器，必须带有小括号
var HeroService = (function () {
    function HeroService(logger, isAuthorized) {
        this.logger = logger;
        this.isAuthorized = isAuthorized;
    }
    HeroService.prototype.getHeroes = function () {
        var _this = this;
        var auth = this.isAuthorized ? 'authorized' : 'unAuthorized';
        this.logger.log("getting heroes...for " + auth + " user.");
        return HEROS_data_1.HEROES.filter(function (hero) { return _this.isAuthorized || !hero.isSecret; });
    };
    HeroService = __decorate([
        core_1.Injectable(), 
        __metadata('design:paramtypes', [log_service_1.LoggerService, Boolean])
    ], HeroService);
    return HeroService;
}());
exports.HeroService = HeroService;
//# sourceMappingURL=hero.service.js.map