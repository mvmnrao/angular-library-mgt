import { Component, OnInit, Input } from '@angular/core';
import { Book } from '../models/book.model';
//import { Input } from '@angular/core/src/metadata/directives';

@Component({
  selector: 'app-book',
  templateUrl: './book.component.html',
  styleUrls: ['./book.component.css']
})
export class BookComponent implements OnInit {
  @Input() book: Book;

  constructor() { }

  ngOnInit() {
  }

}
