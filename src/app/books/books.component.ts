import { Component, OnInit, ElementRef, ViewChild, Input } from '@angular/core';
import { Book } from '../models/book.model';
import { BooksService } from './books.service';
import { MyFilterPipe } from '../pipes/my-filter.pipe';

@Component({
  selector: 'app-books',
  templateUrl: './books.component.html',
  styleUrls: ['./books.component.css']
})
export class BooksComponent implements OnInit {
  selectedBook: Book;
  books: Book[];
  allBooks: Book[];
  //@ViewChild('searchText') filterText: ElementRef;
  
  onBookSelected(data: Book){
    console.log(data);
    this.selectedBook = data;
  }

  constructor(
    private booksService: BooksService,
    private myFilter: MyFilterPipe
  ) {
    //this.books = booksService.getBooks();
    this.booksService.getBooks()
    .subscribe(
      (books: Book[]) => {
        this.allBooks = books;
        this.books = books;
      }, (err: any) => {
        console.log(err);
      }
    );
   }

  ngOnInit() {
  }

  filterBooks(filterText: string){
    console.log(filterText);
    this.books = this.myFilter.transform(this.allBooks, filterText, 'name');
    //this.books = this.myFilter.transform(this.allBooks, this.filterText.nativeElement.value, 'name');
  }
}
