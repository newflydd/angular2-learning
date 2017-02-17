"use strict";
var log_service_1 = require('./log.service');
var hero_service_1 = require('./hero.service');
var user_service_1 = require('./user.service');
var heroServiceFactory = function (logger, userService) {
    console.log(userService.user.isAuthorized);
    return new hero_service_1.HeroService(logger, userService.user.isAuthorized);
};
exports.heroServiceProvider = {
    provide: hero_service_1.HeroService,
    useFactory: heroServiceFactory,
    deps: [log_service_1.LoggerService, user_service_1.UserService]
};
//# sourceMappingURL=hero.service.provider.js.map