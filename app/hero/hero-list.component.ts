import { Component, Input, Output, EventEmitter } from '@angular/core';

import { Hero } from './hero.entity';

import { HeroService } from './service/hero.service';
	
@Component({
	selector: 'hero-list',
	template:`
		<hero-summry *ngIf="hero" [hero]="hero"></hero-summry>
		<ul class="heroes">
			<li class="hero" *ngFor="let itHero of heroes" (click)="selectHero(itHero)" [class.selected]="hero===itHero">
			<span class="hero-id">{{itHero.id}}</span>{{itHero.name}}
			</li>
		</ul>
	`,
	styles:[`
		.hero{
			background-color:#798d9b;
			border-radius:4px;
			width:200px;
			margin-top:10px;
			color:#EEE;
			font-size:18px;
			list-style:none;
			height:40px;
			line-height:40px;
			cursor:pointer;
		}
		.hero:hover{
			color:#607d8b;
			background-color:#ddd;
		}
		.hero .hero-id{
			background-color:#607d8b;
			color:#FFF;
			margin-right:5px;
			font-size:18px;
			border-radius:4px;
			border-top-right-radius:0px;
			border-bottom-right-radius:0px;
			padding:9px 10px;
		}
		.selected{
			color:#ffffd6;
			background-color:#506d7b;
		}
	`],
	providers	: [HeroService]
})
export class HeroListComponent{
	heroes:Hero[];

	constructor(private heroService : HeroService){}

	//默认调用方法，在视图展现后会调用
	ngAfterViewInit(){
		//使用服务提供的承诺机制
		this.heroService.getHeroes().then(
			heroes => {
				this.heroes = heroes;
			}
		);
	}

	@Input() hero:Hero;
	
	@Output() onHeroChange = new EventEmitter<Hero>();

	selectHero(hero:Hero){
		if(this.hero != hero){
			this.hero = hero;
			//弹射事件
			this.onHeroChange.emit(hero);
		}
	}
}