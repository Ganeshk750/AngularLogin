import { Component, OnInit,Input,EventEmitter, Output } from '@angular/core';


@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.css']
})
export class RegistrationComponent implements OnInit {

@Input() public parentData;

//used for output property
@Output() public childData = new EventEmitter();

  constructor() { }

  ngOnInit() {
  }
 //used for output property
  sendDataToparent(){
    this.childData.emit("This is data comming from Child.");
  }
  article = "This is the article about custom Pipes..";

  articles = "This is the article about Youtube";
}
