import { Component } from '@angular/core';

import { Subject } from 'rxjs/Subject';

import { WikiSearchService } from '../service/wikisearch.service';
import { WikiSearchEntity } from '../entity/wikisearch.entity';

@Component({
    moduleId	:	module.id,
    selector    :   'my-app',
	providers	:	[WikiSearchService],
	templateUrl	:	'../html/wiki.html',
	styleUrls	:	['../style/wiki.css']
})
export class WikiComponent{
	public results:WikiSearchEntity[];
	private searchWordsStream = new Subject<string>();
	private languageEN:boolean = false;

	constructor(
		private wikiSearchService : WikiSearchService
	){
		this.searchWordsStream
			.debounceTime(300)		//防抖动时间
			.distinctUntilChanged()	//去除连续重复的
			.forEach(
				words => this.wikiSearchService.getSearchResults(words, this.languageEN).then(
					results => this.results = results
				)
			);
	}

	onSearch(word:string){
		if(word==null || "" == word)
			return;
		this.searchWordsStream.next(word);
	}

	onLanguageChange(checked:boolean){
		this.languageEN = checked;
	}
}