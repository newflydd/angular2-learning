import { Component } from '@angular/core';

@Component({
    template    :   `
    	<div style="margin:10px;">
	        <h1>Search in Wiki:</h1>
	        <input >
	        <button class="btn btn-primary">Test</button>
	        <ul>
				<li *ngFor="let result of results">{{result}}</li>
	        </ul>
        <div>
    `,
    selector    :   'my-app',
})
export class WikiComponent{
	public results:string[];
}