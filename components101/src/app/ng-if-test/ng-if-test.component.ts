import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ng-if-test',
  templateUrl: './ng-if-test.component.html',
  styleUrls: ['./ng-if-test.component.css']
})
export class NgIfTestComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  myObject = 'something'

}
