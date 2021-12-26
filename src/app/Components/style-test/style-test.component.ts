import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-style-test',
  templateUrl: './style-test.component.html',
  styles: [
    '.cstom{color:red}' 
  ]
})
export class StyleTestComponent implements OnInit {

  getName(name:String){
    alert(name)
  }

  constructor() { }

  ngOnInit(): void {
  }

}
