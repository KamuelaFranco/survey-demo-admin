import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';

import { Result } from './result';

import { Observable } from 'rxjs/Observable';
import 'rxjs/Rx';

@Injectable()
export class ResultService {
  constructor (private http: Http) {}

  private resultsUrl = 'https://kamhotjar.herokuapp.com/admin';

  getResults(): Observable<Result[]> {
    return Observable
      .interval(1000)
      .switchMap(() => this.http.get(this.resultsUrl))
      .map(this.extractData)
      .catch(this.handleError);
  }

  private extractData(res: Response) {
    let body = res.json();
    return body.results || {};
  }

  private handleError (error: any) {
    let errMsg = (error.message) ? error.message :
      error.status ? `${error.status} - ${error.statusText}` : 'Server error';
    console.error(errMsg);
    return Observable.throw(errMsg);
  }
}
