import { NgModule } 			from '@angular/core';
import { BrowserModule }		from '@angular/platform-browser';

import { MyAppComponent }		from './myapp.component';
import { HeroListComponent }	from './hero-list.component';
import { HeroComponent } 		from './hero.component';
import { LoggerService }		from './log.service';
import { UserService }			from './user.service';

@NgModule({
	imports:		[BrowserModule],
	declarations:	[MyAppComponent, HeroComponent, HeroListComponent ],
	providers:		[LoggerService, UserService],
	bootstrap:		[MyAppComponent ]
})
export class AppModule{}