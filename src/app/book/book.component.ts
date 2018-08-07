import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Book } from '../models/book.model';
//import { Input } from '@angular/core/src/metadata/directives';

@Component({
  selector: 'app-book',
  templateUrl: './book.component.html',
  styleUrls: ['./book.component.css']
})
export class BookComponent implements OnInit {
  @Input() book: Book;
  @Output() selected: EventEmitter<Book> = new EventEmitter<Book>();
  divBorder: string;
  divCursor: string;

  constructor() { }

  ngOnInit() {
  }

  bookClicked(){
    console.log("From book component bookClicked...!!!");
    this.selected.emit(this.book);
  }

  mouseEntered(data: MouseEvent){
    this.divBorder = "1px";
    this.divCursor = 'pointer';
  }

  mouseLeft(data: MouseEvent){
    this.divBorder = ".5px";
    this.divCursor = 'none';
    //this.selected.emit(null);
  }
}