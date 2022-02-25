import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'my favourite game';
  numberA:number=10;
  numberB:number=12;
  gender:string = "Female";
  cosmeticsFArr = ["Lipstics","Eyebrush"];
  checkingif=true;
  highlight:string='';
  malecos(){
    this.highlight = 'M';
  }
  femalecos(){
    this.highlight = 'F';
  }
  styleOne:boolean = true;
  styleTwo:boolean = true;
  ribbon:string = "GREEN"; //GREEN
  addtwoNumbers() {
    return this.numberA + this.numberB;
  }
 

  // [ngStyle]="{'className':condition of true or false}" 
  // [ngStyle]="{'styleName':'value','styleT':'value'}"
  
  items: any[] = [{name: 'One', val: 1}, {name: 'Two', val: 2}, {name: 'Three', val: 3}];  
  selectedValue: string= 'One';  
  
}   
// function msg(){  
//   alert("hello! this is message");  
//   }  

