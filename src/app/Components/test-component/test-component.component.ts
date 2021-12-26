import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-test-component',
  templateUrl: './test-component.component.html',
  styleUrls: ['./test-component.component.css']
})
export class TestComponentComponent implements OnInit {

  name = ''
  count = 0
  constructor() { }

  ngOnInit(): void {
  }

  getData (data:any) {
    console.log(data);
  }
  getTextVal (input:any) {
    console.log(input);
    this.name = input
  }
  alertName(input:any){
    alert(input)
  }

  counter(type:string){
    type=='add' ? this.count++ : this.count--
  }

}
