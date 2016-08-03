import { Component, OnInit } from '@angular/core';
import { HTTP_PROVIDERS } from '@angular/http';

import { Result } from './result';
import { ResultService } from './result.service';

import './rxjs-operators';

@Component({
  selector: 'my-app',
  template: `
    <h1>{{title}}</h1>
    <span class="error" *ngIf="errorMessage">{{errorMessage}}</span>
    <table>
      <thead>
        <th>Name</th>
        <th>Email</th>
        <th>Age</th>
        <th>About</th>
        <th>Address</th>
        <th>Favourite Book</th>
        <th>Favourite Colours</th>
        <th>Gender</th>
        <th>Complete</th>
      </thead>
      <tr *ngFor="let result of results">
        <td>{{result.name}}</td>
        <td>{{result.email}}</td>
        <td>{{result.age}}</td>
        <td>{{result.about_me}}</td>
        <td>{{result.address}}</td>
        <td>{{result.favourite_book}}</td>
        <td>{{result.favourite_colors}}</td>
        <td>{{result.gender === 1 ? 'Male' : result.gender === 2 ? 'Female' : ''}}</td>
        <td>{{result.is_complete ? 'Yes' : 'No'}}</td>
      </tr>
    </table>
  `,
  providers: [ HTTP_PROVIDERS, ResultService ]
})
export class AppComponent implements OnInit {
  title = 'Survey Results & Admin Page';

  errorMessage: string;
  mode = 'Observable';
  results: Result[]

  constructor (private resultService: ResultService) {}

  ngOnInit() { this.getResults(); }

  getResults() {
    this.resultService.getResults()
      .subscribe(
        results => this.results = results,
        error => this.errorMessage = <any>error
      );
  }
}
