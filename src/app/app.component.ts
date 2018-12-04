import {Component} from '@angular/core';

@Component({
  selector:'pm-root',
  template: `<div>
  <h1>{{pageTitle}}</h1>
  <div>ROG Starter Kit</div>
  </div>`
})

export class AppComponent
{
  pageTitle: string = 'ROG Product Management';
}