import { Component,Input } from '@angular/core';
import { Router } from '@angular/router';

import { Hero } from './hero.entity';

@Component({
	selector:	'hero-summry',
	template:	`
		<label>{{hero.id}} : {{hero.name}}</label>
		<label>{{hero.alterName}}</label>
		<label>{{hero.skillIndex}}</label>
		<button class="btn btn-primary" (click)="gotoDetail()">view detial</button>
	`
})
export class HeroSummryComponent{
	@Input() hero : Hero;

	constructor(
		private router	:	Router,
	){}

	gotoDetail() : void {
		this.router.navigate(
			['/detail', this.hero.id]
		);
	}
}