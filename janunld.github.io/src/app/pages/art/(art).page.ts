import { Component } from '@angular/core';
import { NoContentComponent } from '../../components';

@Component({
  selector: 'jun-art',
  standalone: true,
  imports: [NoContentComponent],
  template: `
    <div class="container">
      <jun-no-content class="my-12"></jun-no-content>
    </div>
  `,
})
export default class BlogComponent {}
