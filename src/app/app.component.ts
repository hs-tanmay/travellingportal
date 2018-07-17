import { Component } from '@angular/core';

export interface City {
  value: string;
  viewValue: string;
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {
  cities: City[] = [
    {value: 'pune', viewValue: 'Pune'},
    {value: 'mumbai', viewValue: 'Mumbai'},
    {value: 'nagpur', viewValue: 'Nagpur'}
  ];
}
