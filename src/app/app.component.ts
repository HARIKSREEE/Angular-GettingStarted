import {Component} from '@angular/core';

@Component({
  selector:'pm-root',
  template: `<div>
  <h1>{{pageTitle}}</h1>
  <div>ROG Starter Kit</div>
  <pm-products></pm-products>
  </div>`
  /*templateUrl:'./app.component.html'*/
})

export class AppComponent
{
  pageTitle: string = 'ROG Product Management';
}