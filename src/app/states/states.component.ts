import { Component, OnInit, Input, OnChanges, Output, EventEmitter } from '@angular/core';
import { State } from '../models/state.model';

@Component({
  selector: 'app-states',
  templateUrl: './states.component.html',
  styleUrls: ['./states.component.css']
})
export class StatesComponent implements OnInit, OnChanges {
  @Input() selectedCountry: string;
  @Output() selectedStateChanged: EventEmitter<string> = new EventEmitter<string>();

  selectedState: string;
  states: State[];

  constructor() {
    this.selectedCountry = '';
  }

  ngOnInit() {
  }

  ngOnChanges() {
    this.states = this.allStates.filter(s => s.countryCode === this.selectedCountry);
  }

  stateChanged(){
    this.selectedStateChanged.emit(this.selectedState);
  }

  allStates: State[] = [
    {
      code: 'AP',
      name: 'Andhra Pradesh',
      countryCode: 'IND'
    },
    {
      code: 'TS',
      name: 'Telangana',
      countryCode: 'IND'
    },
    {
      code: 'TN',
      name: 'Tamilnadu',
      countryCode: 'IND'
    },
    {
      code: 'NJ',
      name: 'New Jercy',
      countryCode: 'USA'
    },
    {
      code: 'PA',
      name: 'Pheladelphia',
      countryCode: 'USA'
    },
    {
      code: 'AO',
      name: 'Aomori',
      countryCode: 'JP'
    }
  ];
}
