import { Component } from '@angular/core';

import { Hero } from './hero.entity';

import { HeroService } from './service/hero.service';

@Component({
	selector	:	'my-app',
	template	:	`
		<h1>{{title}}</h1>
		<router-outlet>
		</router-outlet>
		<h3>倒计时：{{time}}</h3>
	`,
})
export class MainComponent{
	title = 'Tour of Heroes';
	hero:Hero;
	time:number = 1000;

	constructor(){}

	onHeroChange(hero:Hero){
		this.hero = hero;
	}

	// 定时器
	private timer:any;

	// 每一秒更新时间差
	ngAfterViewInit() {
		this.timer = setInterval(() => {
			this.time--;
		}, 1000);
	}
	
}