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
var Observable_1 = require('rxjs/Observable');
require('rxjs/Rx');
var ResultService = (function () {
    function ResultService(http) {
        this.http = http;
        this.resultsUrl = 'https://kamhotjar.herokuapp.com/admin';
    }
    ResultService.prototype.getResults = function () {
        var _this = this;
        return Observable_1.Observable
            .interval(1000)
            .switchMap(function () { return _this.http.get(_this.resultsUrl); })
            .map(this.extractData)
            .catch(this.handleError);
    };
    ResultService.prototype.extractData = function (res) {
        var body = res.json();
        return body.results || {};
    };
    ResultService.prototype.handleError = function (error) {
        var errMsg = (error.message) ? error.message :
            error.status ? error.status + " - " + error.statusText : 'Server error';
        console.error(errMsg);
        return Observable_1.Observable.throw(errMsg);
    };
    ResultService = __decorate([
        core_1.Injectable(), 
        __metadata('design:paramtypes', [http_1.Http])
    ], ResultService);
    return ResultService;
}());
exports.ResultService = ResultService;
//# sourceMappingURL=result.service.js.map