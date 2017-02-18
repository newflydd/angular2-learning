import { Injectable } from '@angular/core';
import { Jsonp,URLSearchParams } from '@angular/http';

import { WikiSearchEntity } from '../entity/wikisearch.entity';

@Injectable()
export class WikiSearchService{
    constructor(private jsonp : Jsonp){}

    getSearchResults(word : string, languageEN : boolean) : Promise<WikiSearchEntity[]>{
        let url = `http://${ languageEN ?'en':'zh'}.wikipedia.org/w/api.php`;
        let params = new URLSearchParams();
        params.set('search', word); // the user's search value
        params.set('action', 'opensearch');
        params.set('format', 'json');
        params.set('callback', 'JSONP_CALLBACK');

        return this.jsonp.get(url, {search : params})
            .map(response =>  {
                let json = response.json();
                let size = json[1].length;
                let results : WikiSearchEntity[] = new Array();

                for(let i = 0; i < size; i++){
                    let wse : WikiSearchEntity = new WikiSearchEntity(json[1][i], json[2][i], json[3][i]);
                    results.push(wse);
                }

                return results;
            })
            .toPromise();
    }
}