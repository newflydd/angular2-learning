import { LoggerService } from './log.service';
import { HeroService } from './hero.service';

import { UserService } from './user.service';

let heroServiceFactory = (logger:LoggerService, userService: UserService) => {
	console.log(userService.user.isAuthorized);
	return new HeroService(logger, userService.user.isAuthorized);
}

export let heroServiceProvider = {
	provide : HeroService,
	useFactory : heroServiceFactory,
	deps : [LoggerService, UserService]
}