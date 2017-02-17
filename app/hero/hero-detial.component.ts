import 'rxjs/add/operator/switchMap';
import { Component, OnInit } 		from '@angular/core';
import { ActivatedRoute, Params } 	from '@angular/router';
import { Location } 				from '@angular/common';

import { Hero } 					from './hero.entity';
import { HeroService } 				from './service/hero.service';

@Component({
	moduleId	:	module.id,
	selector	:	'hero-detial',
	template	:	`
	<div *ngIf="hero">
		<h2>{{hero.name}} details:</h2>
		<div>
			<label>id: </label>{{hero.id}}
		</div>
		<div>
			<label>name: </label>
			<input placeholder="name" value="{{hero.name}}"/>
		</div>
		<button (click)="goBack()">Back</button>
	</div>
	`,
	providers	:	[HeroService]
})
export class HeroDetialComponent implements OnInit{
	hero : Hero;

	constructor(
		private heroService	:	HeroService,
		private route		:	ActivatedRoute,
		private location	:	Location
	){}

	ngOnInit() : void {
		this.route.params.subscribe(
			params => {	
				this.heroService.getHeroById(params['id']).then(hero => this.hero = hero);
			}
		);
	}

	goBack() : void {
		this.location.back();
	}

}