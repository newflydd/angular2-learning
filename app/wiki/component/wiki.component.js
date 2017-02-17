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
var WikiComponent = (function () {
    function WikiComponent() {
    }
    WikiComponent = __decorate([
        core_1.Component({
            template: "\n    \t<div style=\"margin:10px;\">\n\t        <h1>Search in Wiki:</h1>\n\t        <input >\n\t        <button class=\"btn btn-primary\">Test</button>\n\t        <ul>\n\t\t\t\t<li *ngFor=\"let result of results\">{{result}}</li>\n\t        </ul>\n        <div>\n    ",
            selector: 'my-app',
        }), 
        __metadata('design:paramtypes', [])
    ], WikiComponent);
    return WikiComponent;
}());
exports.WikiComponent = WikiComponent;
//# sourceMappingURL=wiki.component.js.map