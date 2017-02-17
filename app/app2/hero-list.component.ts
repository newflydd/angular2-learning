import {Component} from '@angular/core';

import {Hero} from '../hero';

import {HeroService} from './hero.service';

@Component({
	moduleId:	module.id,
	selector: 	'hero-list',
	templateUrl:'hero-list.template.html',
})
export class HeroListComponent {
	public heroes:Hero[];

	//构造函数中的heroService, @Component装饰器，以及父级组件myapp.component中的providers
	//三者联合起来即可隐式地告诉Angular注入规则
	constructor(heroService : HeroService){
		this.heroes = heroService.getHeroes();
	}
}