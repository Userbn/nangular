import { Component } from '@angular/core';

@Component({
  selector: 'my-app',
  template: `<h1>Coucou {{name}}</h1>`,
})
export class CoucouComponent  { name = 'Angular'; }
