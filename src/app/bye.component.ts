import { Component } from '@angular/core';

@Component({
  selector: 'app-bye',
  template: `
    <div>
      <h3>{{title}}</h3>
    </div>
  `
})
export class ByeComponent {
  title = 'Bye';
}
