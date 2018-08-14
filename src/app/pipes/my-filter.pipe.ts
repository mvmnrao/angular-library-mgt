import { Pipe, PipeTransform } from '@angular/core';
import { Book } from '../models/book.model';

@Pipe({
  name: 'myFilter'
})
export class MyFilterPipe implements PipeTransform {

  transform(value: Book[], text: string, filterBy: string): Book[] {
    if(text){
      return value.filter(b => b.name.toLowerCase().startsWith(text));
    }
    return value;
  }

}
