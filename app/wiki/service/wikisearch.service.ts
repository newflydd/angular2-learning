import { Injectable } from '@angular/core';
import { Http } from '@angular/http';

@Injectable()
export class WikiSearchService{
    private url = 'http://en.wikipedia.org/w/api.php';

    constructor(private http : Http){}

    getSearchResults(word : string) : Promise<string[]>{
        return null;
    }
}