import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  template: `
    <h1> My Diary </h1>
    <p> My diary for today is about {{diary}} </p>
  `
})
export class AppComponent {
  diary = 'My Thoughts ';
}
