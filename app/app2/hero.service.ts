import { Injectable } from '@angular/core';
import { HEROES }     from './HEROS.data';

import { LoggerService } from './log.service';

//注入器，必须带有小括号
@Injectable()
export class HeroService {
	constructor(
		private logger:LoggerService,
		private isAuthorized:boolean
	){}

	getHeroes() {
		let auth = this.isAuthorized ? 'authorized' : 'unAuthorized';
		this.logger.log(`getting heroes...for ${auth} user.`);
		return HEROES.filter(hero => this.isAuthorized || !hero.isSecret);
	}
}