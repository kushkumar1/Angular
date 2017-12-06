import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ng-for-test',
  templateUrl: './ng-for-test.component.html',
  styleUrls: ['./ng-for-test.component.css']
})
export class NgForTestComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  myArray = ['First','Second', 'Third', 'Fourth']

}
