import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';

@Component({
  selector: 'app-home-task-one',
  templateUrl: './home-task-one.component.html',
  styleUrls: ['./home-task-one.component.css']
})
export class HomeTaskOneComponent implements OnInit {
  nameToway: string = 'default value';
  nameOneway: string = 'default val';
  selectedCountry: string = '';
  selectedState: string = '';
  @ViewChild('bName') bkName: ElementRef;

  constructor() { }

  ngOnInit() {
  }

  bottonClicked(){
    console.log(this.nameToway);
    console.log(this.nameOneway);
  }

  btnClicked(element: HTMLInputElement){
    console.log("LocalReference: " + element);
    console.log(element);
    console.log("ViewChild: " + this.bkName);
    console.log(this.bkName);
  }

  onCountryChanged(data: string){
    this.selectedCountry = data;
  }

  onStateChanged(data: string){
    this.selectedState = data;
  }
}
