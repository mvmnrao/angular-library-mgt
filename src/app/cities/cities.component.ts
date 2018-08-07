import { Component, OnInit, Input, OnChanges } from '@angular/core';
import { City } from '../models/city.model';

@Component({
  selector: 'app-cities',
  templateUrl: './cities.component.html',
  styleUrls: ['./cities.component.css']
})
export class CitiesComponent implements OnInit, OnChanges {
  cities: City[];
  @Input() selectedState: string;

  constructor() {
    this.selectedState = '';
  }

  ngOnInit() {
  }

  ngOnChanges() {
    this.cities = this.allCities.filter(c => c.stateCode === this.selectedState);
  }

  allCities: City[] = [
    {
      code: 'GNT',
      name: 'Guntur',
      stateCode: 'AP'
    },
    {
      code: 'HYD',
      name: 'Hyderabad',
      stateCode: 'TS'
    },
    {
      code: 'JS',
      name: 'Jercy City',
      stateCode: 'NJ'
    },
    {
      code: 'CH',
      name: 'Conshohocken',
      stateCode: 'PA'
    }
  ];

}