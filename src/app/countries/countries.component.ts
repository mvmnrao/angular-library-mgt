import { Component, OnInit, OnChanges, Output, EventEmitter } from '@angular/core';
import { Country } from '../models/country.model';

@Component({
  selector: 'app-countries',
  templateUrl: './countries.component.html',
  styleUrls: ['./countries.component.css']
})
export class CountriesComponent implements OnInit {
  selectedCountry: any;
  @Output() selectedCountryChanged: EventEmitter<string> = new EventEmitter<string>();
  constructor() { 
    this.selectedCountry = '';
  }

  ngOnInit() {
  }

  countryChanged()
  {
    this.selectedCountryChanged.emit(this.selectedCountry);
  }

  countries: Country[] = [
    {
      code: '',
      name: 'Select Country'
    },
    {
      code: 'IND',
      name: 'INDIA'
    },
    {
      code: 'USA',
      name: 'United States of America'
    },
    {
      code: 'JP',
      name: 'Japan'
    }
  ];
}
