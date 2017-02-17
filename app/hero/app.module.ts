import { NgModule }		 from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpModule, JsonpModule } from '@angular/http';

// Imports for loading & configuring the in-memory web api
import { InMemoryWebApiModule } from 'angular-in-memory-web-api';
import { InMemoryDataService }  from './service/in-memory-data.service';

import { MainComponent } from './main.component';
import { HeroListComponent } from './hero-list.component';
import { HeroSummryComponent } from './hero-summry.component';
import { HeroDetialComponent } from './hero-detial.component';

import { AppRoutingModule } from './app-routing.module';


// Add the RxJS Observable operators.
import './rxjs-operators.import';

@NgModule({
	imports:	 [	BrowserModule,
					AppRoutingModule,
					HttpModule,
					InMemoryWebApiModule.forRoot(InMemoryDataService)
	],
	declarations:[	MainComponent, 
					HeroListComponent,
					HeroSummryComponent,
					HeroDetialComponent
	],
	bootstrap:	 [	MainComponent ]
})
export class AppModule{}