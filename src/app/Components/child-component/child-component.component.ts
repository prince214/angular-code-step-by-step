import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-child-component',
  templateUrl: './child-component.component.html',
  styleUrls: ['./child-component.component.css']
})
export class ChildComponentComponent implements OnInit {

  @Input() passData = 'test'
  @Output() updatePassedDataEvent = new EventEmitter<string>();
  constructor() { }

  ngOnInit(): void {
  }

}
