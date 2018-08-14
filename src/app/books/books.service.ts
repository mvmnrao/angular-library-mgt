import { Injectable } from '@angular/core';
import { Book } from '../models/book.model';
import { Observable } from '../../../node_modules/rxjs/Observable';
import 'rxjs';
import { HttpClient } from '../../../node_modules/@angular/common/http';
import { environment } from '../../environments/environment';
import { observableToBeFn } from '../../../node_modules/rxjs/testing/TestScheduler';
import { map } from '../../../node_modules/rxjs/operators';
import 'rxjs/Rx';
import 'rxjs/add/operator/map';
import { urls } from '../constants/urls.constant';

@Injectable()
export class BooksService {

  constructor(
    private http: HttpClient
  ) { }

  // getBooks(): Observable<Book[]>{
  //   return Observable.of(this.books);
  // }

  getBooks(): Observable<Book[]>{
    return this.http.get(environment.baseUrl + urls.books)
    .map(data => {
      let books: Book[] = <Book[]>data;
      return books.sort(
        (a: Book, b: Book) => a.code > b.code ? 1 : -1
      );
      //return books;
    });
    // .pipe(
    //   map(data => {return data})//{console.log(data)})
    // );
  }

  // private books: Book[] = [
  //   {
  //     code: 'B001',
  //     name: 'LEARNING ANGULAR',
  //     thumbnail: 'https://d255esdrn735hr.cloudfront.net/sites/default/files/imagecache/ppv4_main_book_cover/9781785882074.png',
  //     author: 'Rohit Khurana'
  //   },
  //   {
  //     code: 'B002',
  //     name: 'HOW TO BE THE PERFECT Dutch',
  //     thumbnail: 'https://cdn.cp.adobe.io/content/2/rendition/31b31ba1-2552-4bb0-8a81-1e907dc293e6/artwork/7b902897-aa35-4673-a58f-e06d7b785a4c/version/3/format/jpg/dimension/width/size/1200',
  //     author: 'Kathian Brands'
  //   },    
  //   // {
  //   //   code: 'B003',
  //   //   name: 'CITY ON THE EDGE',
  //   //   thumbnail: 'http://static1.1.sqspcdn.com/static/p/830807/13077072/1327980353077/goldman-cover.jpg?token=bYRvEOZekgVAGwM0XbmOfcA9OsI%3D',
  //   //   author: 'Mark Goldman'
  //   // },
  //   // {
  //   //   code: 'B004',
  //   //   name: 'ANGULAR 2',
  //   //   thumbnail: 'https://s3.amazonaws.com/titlepages.leanpub.com/angular2-book/hero?1518070036',
  //   //   author: 'Sebastian Eschweller'
  //   // },
  //   // {
  //   //   code: 'B005',
  //   //   name: 'AGE OF MINORITY',
  //   //   thumbnail: 'http://static1.1.sqspcdn.com/static/p/830807/19507277/1398278039500/jordan-cover-2.jpg?token=LlcJBeW9%2FmwdnW5KqRcAtB7oH0c%3D',
  //   //   author: 'Jordan Tannahill'
  //   // }
  //]
}
