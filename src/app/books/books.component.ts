import { Component, OnInit, ElementRef, ViewChild } from '@angular/core';
import { Book } from '../models/book.model';

@Component({
  selector: 'app-books',
  templateUrl: './books.component.html',
  styleUrls: ['./books.component.css']
})
export class BooksComponent implements OnInit {
  selectedBook: Book;
  
  onBookSelected(data: Book){
    console.log(data);
    this.selectedBook = data;
  }

  constructor() { }

  ngOnInit() {
  }

  books: Book[] = [
    {
      code: 'B001',
      name: 'LEARNING ANGULAR',
      thumbnail: 'https://d255esdrn735hr.cloudfront.net/sites/default/files/imagecache/ppv4_main_book_cover/9781785882074.png',
      author: 'Rohit Khurana'
    },
    {
      code: 'B002',
      name: 'HOW TO BE THE PERFECT Dutch',
      thumbnail: 'https://cdn.cp.adobe.io/content/2/rendition/31b31ba1-2552-4bb0-8a81-1e907dc293e6/artwork/7b902897-aa35-4673-a58f-e06d7b785a4c/version/3/format/jpg/dimension/width/size/1200',
      author: 'Kathian Brands'
    },    
    // {
    //   code: 'B003',
    //   name: 'CITY ON THE EDGE',
    //   thumbnail: 'http://static1.1.sqspcdn.com/static/p/830807/13077072/1327980353077/goldman-cover.jpg?token=bYRvEOZekgVAGwM0XbmOfcA9OsI%3D',
    //   author: 'Mark Goldman'
    // },
    // {
    //   code: 'B004',
    //   name: 'ANGULAR 2',
    //   thumbnail: 'https://s3.amazonaws.com/titlepages.leanpub.com/angular2-book/hero?1518070036',
    //   author: 'Sebastian Eschweller'
    // },
    // {
    //   code: 'B005',
    //   name: 'AGE OF MINORITY',
    //   thumbnail: 'http://static1.1.sqspcdn.com/static/p/830807/19507277/1398278039500/jordan-cover-2.jpg?token=LlcJBeW9%2FmwdnW5KqRcAtB7oH0c%3D',
    //   author: 'Jordan Tannahill'
    // }
  ]
}
