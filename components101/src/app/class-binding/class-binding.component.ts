import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-class-binding',
  templateUrl: './class-binding.component.html',
  styleUrls: ['./class-binding.component.css']
})
export class ClassBindingComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  titleClasses = {
    'red-color' : true,
    'underline' : true,
    'center-align':true
  }

    right = 'right-align'
    notRight = false;

}
