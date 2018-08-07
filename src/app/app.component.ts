import { Component, ViewChild, ElementRef } from '@angular/core';
import { Book } from './models/book.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  // template: `
  //   <div>
  //     <h1>Hellow world</h1>
  //   </div>`,
  styleUrls: ['./app.component.css'],
  //styles: ['h1 {color: green; font-size: 35px; font-weight: bold;}']
})
export class AppComponent {
  title = 'to Angular CDP Program';
}