import { Component }		from '@angular/core';

import { UserService }		from './user.service';
import { User }				from './user.service';
import { LoggerService }	from './log.service';

@Component({
	selector	:	'my-app',
	template	:	`
		<h1>Heroes</h1>
		<hero-comp id="auth" *ngIf="user.isAuthorized"></hero-comp>
		<hero-comp id="unauth" *ngIf="!user.isAuthorized"></hero-comp>
		<h2>User's Athorized:{{user.isAuthorized}}</h2>
		<button (click)="changeAtho();" class="btn btn-primary">Change Autho</button>
	`
})
export class MyAppComponent{
	public user:User;

	constructor(
		private userService:UserService,
		private logger:LoggerService
	){
		this.user = userService.user;
	}

	changeAtho(){
		this.logger.log('changing user authorized');
		this.userService.changeUserAuthorized();
	}
}