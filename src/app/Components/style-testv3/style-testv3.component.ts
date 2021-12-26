import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-style-testv3',
  template: `
    <p class="v1custom">
      style-testv3 works!
    </p>
  `,
  styles: [
    '.v1custom{color:blue}'
  ]
})
export class StyleTestv3Component implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
