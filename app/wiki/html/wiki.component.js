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
        this.searchWordsStream
            .debounceTime(300) //防抖动时间
            .distinctUntilChanged() //去除连续重复的
            .forEach(function (words) { return _this.wikiSearchService.getSearchResults(words).then(function (results) { return _this.results = results; }); });
    }
    WikiComponent.prototype.onSearch = function (word) {
        if (word == null || "" == word)
            return;
        this.searchWordsStream.next(word);
    };
    WikiComponent = __decorate([
        core_1.Component({
            template: "\n    \t<div style=\"margin:10px;\">\n\t        <h1>Search in Wiki:</h1>\n\t\t\t<span class='tg-list-item'>\n\t\t\t\t<input class='tgl tgl-flip' id='cb5' type='checkbox'>\n\t\t\t\t<label class='tgl-btn' data-tg-off='\u4E2D\u6587' data-tg-on='\u82F1\u6587' for='cb5'></label>\n\t\t\t</span>\n\t        <input #inputWord (keyup)=\"onSearch(inputWord.value)\">\n\t        <button class=\"btn btn-primary\">Test</button>\n\t        <ul>\n\t\t\t\t<li *ngFor=\"let result of results\">\n\t\t\t\t\t<a [href]=\"result.url\" [title]=\"result.description\" target=\"_blank\"> {{result.words}}</a>\n\t\t\t\t</li>\n\t        </ul>\n        <div>\n    ",
            selector: 'my-app',
            providers: [wikisearch_service_1.WikiSearchService],
            styles: ["\n.tgl{display:none}\n.tgl,.tgl *,.tgl :after,.tgl :before,.tgl+.tgl-btn,.tgl:after,.tgl:before{-webkit-box-sizing:border-box;-moz-box-sizing:border-box;box-sizing:border-box}\n.tgl ::-moz-selection,.tgl :after::-moz-selection,.tgl :before::-moz-selection,.tgl+.tgl-btn::-moz-selection,.tgl::-moz-selection,.tgl:after::-moz-selection,.tgl:before::-moz-selection{background:0 0}\n.tgl ::selection,.tgl :after::selection,.tgl :before::selection,.tgl+.tgl-btn::selection,.tgl::selection,.tgl:after::selection,.tgl:before::selection{background:0 0}\n.tgl+.tgl-btn{outline:0;display:block;width:4em;height:2em;position:relative;cursor:pointer}\n.tgl+.tgl-btn:after,.tgl+.tgl-btn:before{position:relative;display:block;content:\"\";width:50%;height:100%}\n.tgl+.tgl-btn:after{left:0}\n.tgl+.tgl-btn:before{display:none}\n.tgl:checked+.tgl-btn:after{left:50%}\n.tgl-flip+.tgl-btn{padding:2px;-webkit-transition:all .2s ease;transition:all .2s ease;font-family:sans-serif;-webkit-perspective:100px;-ms-perspective:100px;perspective:100px}\n.tgl-flip+.tgl-btn:after,.tgl-flip+.tgl-btn:before{display:inline-block;-webkit-transition:all .4s ease;transition:all .4s ease;width:100%;text-align:center;position:absolute;line-height:2em;font-weight:700;color:#fff;position:absolute;top:0;left:0;-webkit-backface-visibility:hidden;-ms-backface-visibility:hidden;backface-visibility:hidden;border-radius:4px}\n.tgl-flip+.tgl-btn:after{content:attr(data-tg-on);background:#02C66F;-webkit-transform:rotateY(-180deg);-ms-transform:rotateY(-180deg);transform:rotateY(-180deg)}\n.tgl-flip+.tgl-btn:before{background:#FF3A19;content:attr(data-tg-off)}\n.tgl-flip+.tgl-btn:active:before{-webkit-transform:rotateY(-20deg);-ms-transform:rotateY(-20deg);transform:rotateY(-20deg)}\n.tgl-flip:checked+.tgl-btn:before{-webkit-transform:rotateY(180deg);-ms-transform:rotateY(180deg);transform:rotateY(180deg)}\n.tgl-flip:checked+.tgl-btn:after{-webkit-transform:rotateY(0);-ms-transform:rotateY(0);transform:rotateY(0);left:0;background:#7FC6A6}\n.tgl-flip:checked+.tgl-btn:active:after{-webkit-transform:rotateY(20deg);-ms-transform:rotateY(20deg);transform:rotateY(20deg)}\n\t"]
        }), 
        __metadata('design:paramtypes', [wikisearch_service_1.WikiSearchService])
    ], WikiComponent);
    return WikiComponent;
}());
exports.WikiComponent = WikiComponent;
//# sourceMappingURL=wiki.component.js.map