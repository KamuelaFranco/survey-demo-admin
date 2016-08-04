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
var http_1 = require('@angular/http');
var result_service_1 = require('./result.service');
require('./rxjs-operators');
var AppComponent = (function () {
    function AppComponent(resultService) {
        this.resultService = resultService;
        this.title = 'Survey Results & Admin Page';
        this.mode = 'Observable';
    }
    AppComponent.prototype.ngOnInit = function () { this.getResults(); };
    AppComponent.prototype.getResults = function () {
        var _this = this;
        this.resultService.getResults()
            .subscribe(function (results) { return _this.results = results; }, function (error) { return _this.errorMessage = error; });
    };
    AppComponent = __decorate([
        core_1.Component({
            selector: 'my-app',
            template: "\n    <h1>{{title}}</h1>\n    <span class=\"error\" *ngIf=\"errorMessage\">{{errorMessage}}</span>\n    <table>\n      <thead>\n        <th>Name</th>\n        <th>Email</th>\n        <th>Age</th>\n        <th>About</th>\n        <th>Address</th>\n        <th>Favourite Book</th>\n        <th>Favourite Colours</th>\n        <th>Gender</th>\n        <th>Complete</th>\n      </thead>\n      <tr *ngFor=\"let result of results\">\n        <td>{{result.name}}</td>\n        <td>{{result.email}}</td>\n        <td>{{result.age}}</td>\n        <td>{{result.about_me}}</td>\n        <td>{{result.address}}</td>\n        <td>{{result.favourite_book}}</td>\n        <td>{{result.favourite_colours}}</td>\n        <td>{{result.gender === 1 ? 'Male' : result.gender === 2 ? 'Female' : ''}}</td>\n        <td>{{result.is_complete ? 'Yes' : 'No'}}</td>\n      </tr>\n    </table>\n  ",
            providers: [http_1.HTTP_PROVIDERS, result_service_1.ResultService]
        }), 
        __metadata('design:paramtypes', [result_service_1.ResultService])
    ], AppComponent);
    return AppComponent;
}());
exports.AppComponent = AppComponent;
//# sourceMappingURL=app.component.js.map