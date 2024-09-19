import { Component } from '@angular/core';

import { AnalogWelcomeComponent } from './analog-welcome.component';

@Component({
  selector: 'jun-home',
  standalone: true,
  imports: [AnalogWelcomeComponent],
  template: `
     <jun-welcome/>
  `,
})
export default class HomeComponent {
}
