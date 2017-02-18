"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var core_1 = require('@angular/core');
var Subject_1 = require('rxjs/Subject');
var wikisearch_service_1 = require('../service/wikisearch.service');
var WikiComponent = (function () {
    function WikiComponent(wikiSearchService) {
        var _this = this;
        this.wikiSearchService = wikiSearchService;
        this.searchWordsStream = new Subject_1.Subject();
        this.languageEN = false;
        this.searchWordsStream
            .debounceTime(300) //防抖动时间
            .distinctUntilChanged() //去除连续重复的
            .forEach(function (words) { return _this.wikiSearchService.getSearchResults(words, _this.languageEN).then(function (results) { return _this.results = results; }); });
    }
    WikiComponent.prototype.onSearch = function (word) {
        if (word == null || "" == word)
            return;
        this.searchWordsStream.next(word);
    };
    WikiComponent.prototype.onLanguageChange = function (checked) {
        this.languageEN = checked;
    };
    WikiComponent = __decorate([
        core_1.Component({
            moduleId: module.id,
            selector: 'my-app',
            providers: [wikisearch_service_1.WikiSearchService],
            templateUrl: '../html/wiki.html',
            styleUrls: ['../style/wiki.css']
        }), 
        __metadata('design:paramtypes', [wikisearch_service_1.WikiSearchService])
    ], WikiComponent);
    return WikiComponent;
}());
exports.WikiComponent = WikiComponent;
//# sourceMappingURL=wiki.component.js.map