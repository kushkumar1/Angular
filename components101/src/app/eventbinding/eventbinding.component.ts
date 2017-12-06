import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-eventbinding',
  templateUrl: './eventbinding.component.html',
  styleUrls: ['./eventbinding.component.css']
})
export class EventbindingComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }
  myObject = ' ';
  print(msg) {
    console.log(msg)
     this.myObject = "Hello !";
  }

  values = '';
  
    onKey(print) { 
      this.values += print.target.value + ' | ';
    }
  x= '';
    print1(text)  {
      this.x = text.target.value    // Below is an alternative way to extract the string inside the text box.
      // this.x = (<HTMLInputElement>document.getElementById("test")).value;      
    }

  y = '';
    print2(textPassed){
      this.y = textPassed
    }

    printHello(printTextBox)  {
      console.log(printTextBox);
    }
}
