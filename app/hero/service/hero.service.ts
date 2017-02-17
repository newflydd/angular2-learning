import { Injectable }	from '@angular/core';
import { Http} 			from '@angular/http';

import { Hero } 		from '../hero.entity';
import { HEROES } 		from './heroes.data';

@Injectable()
export class HeroService{
	private heroesUrl = 'app/heroes';

	constructor(private http:Http){

	}

	getHeroes() : Promise<Hero[]>{	
		//return Promise.resolve(HEROES);
		return this.http.get( this.heroesUrl )
					.toPromise()
					.then( response => response.json().data as Hero[])
					.catch(this.handleError);
	}

	getHeroesSlowly() : Promise<Hero[]>{
		return new Promise<Hero[]>(
			resolve => setTimeout(resolve, 2000)
		).then(() => this.getHeroes());
	}

	getHeroById(id : number) : Promise<Hero>{
		return this.getHeroes().then(
			heroes => heroes.find(hero => hero.id == id)
		);
	}

	private handleError(error: any): Promise<any> {
	  console.error('An error occurred', error); // for demo purposes only
	  return Promise.reject(error.message || error);
	}
}