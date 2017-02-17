import { Component } from '@angular/core';

import { heroServiceProvider } from './hero.service.provider';

@Component({
	selector : 'hero-comp',
	template : '<hero-list></hero-list>',
	providers: [heroServiceProvider]
})
export class HeroComponent{

}