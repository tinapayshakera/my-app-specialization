import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Specialization';
  isDisabled = false;
  inputValue = "";
  numberValue = 0;

  // sampleClick() {
  //   console.log(this.inputValue);
  // };

  // increaseValue() {
  //   this.numberValue++
  //   this.inputValue = this.numberValue.toString();
  // }
  receiveAdd(){
    this.numberValue++
    this.inputValue = this.numberValue.toString();

  }

  receiveSubtract(){
    this.numberValue--
    this.inputValue = this.numberValue.toString();
  }

  receiveEvent(){
    console.log();
  // inputValue = 0;
  // addEvent(){
  //   this.inputValue ++;

  // }
  // subtractEvent(){
  //   this.inputValue --;
  // }
  // isEventReceived = "Not yet!";

  // receiveEvent() {
  //   console.log("test in app component")
  // }
}
}


