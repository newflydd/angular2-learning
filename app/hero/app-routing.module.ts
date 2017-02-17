import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { HeroDetialComponent } from './hero-detial.component';
import { HeroListComponent } from './hero-list.component';

const routes : Routes = [
	{ path : '', redirectTo : '/heroes', pathMatch : 'full'},
	{ path : 'heroes', component : HeroListComponent},
	{ path : 'detail/:id', component : HeroDetialComponent }
];

@NgModule({
	imports	:	[ RouterModule.forRoot(routes) ],
	exports	:	[ RouterModule ]
})
export class AppRoutingModule{}