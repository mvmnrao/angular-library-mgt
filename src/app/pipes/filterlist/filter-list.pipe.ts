import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filterList'
})

export class FilterListPipe implements PipeTransform {

  transform(value: string, args?: string): boolean {
    return value == args[0];
  }

}
