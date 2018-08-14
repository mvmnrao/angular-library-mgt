import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, FormControl} from '@angular/forms';
import { RouterModule } from '@angular/router';
import { HttpClientModule} from '@angular/common/http'
import { AppComponent } from './app.component';
import { BookComponent } from './book/book.component';
import { BookDetailsComponent } from './book-details/book-details.component';
import { HighlighterDirective } from './directives/highlighter/highlighter.directive';
import { BooksComponent } from './books/books.component';
import { HomeTaskOneComponent } from './home-task-one/home-task-one.component';
import { CountriesComponent } from './countries/countries.component';
import { StatesComponent } from './states/states.component';
import { CitiesComponent } from './cities/cities.component';
import { FilterListPipe } from './pipes/filterlist/filter-list.pipe';
import { HoverElementDirective } from './directives/hoverelement/hover-element.directive';
import { BooksService } from './books/books.service';
import { ShortenPipePipe } from './pipes/shorten-pipe.pipe';
import { MyFilterPipe } from './pipes/my-filter.pipe';

@NgModule({
  declarations: [
    AppComponent,
    BookComponent,
    BookDetailsComponent,
    HighlighterDirective,
    BooksComponent,
    HomeTaskOneComponent,
    CountriesComponent,
    StatesComponent,
    CitiesComponent,
    FilterListPipe,
    HoverElementDirective,
    ShortenPipePipe,
    MyFilterPipe
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    RouterModule.forRoot([
      {
        path: "books",
        component: BooksComponent
      },
      {
        path: "homeTaskOne",
        component: HomeTaskOneComponent
      },
      {
        path: '',
        redirectTo: '/books',
        pathMatch: 'full'
      }
    ])
  ],
  providers: [
    BooksService,
    MyFilterPipe
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
