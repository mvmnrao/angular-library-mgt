import { Component, OnInit, Input, OnChanges } from '@angular/core';
import { Book } from '../models/book.model';

@Component({
  selector: 'app-book-details',
  templateUrl: './book-details.component.html',
  styleUrls: ['./book-details.component.css']
})
export class BookDetailsComponent implements OnInit, OnChanges {
  @Input() bookInput: Book;
  myClass: { 'greenBold': boolean, 'redBold': boolean};
  constructor() { }

  ngOnInit() {
  }

  ngOnChanges(){
    this.myClass={ 'greenBold': this.bookInput.code == 'B001', 'redBold': this.bookInput.code == 'B002'};
  }
}