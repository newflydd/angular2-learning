import { Injectable } from '@angular/core';

export class User{
	constructor(
		public name:string,
		public isAuthorized:boolean = false
	){}
}

@Injectable()
export class UserService{
	public user:User = new User('bob',true);

	public changeUserAuthorized(){
		this.user.isAuthorized = !this.user.isAuthorized;
	}
} 