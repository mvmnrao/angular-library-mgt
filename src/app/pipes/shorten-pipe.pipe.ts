import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'shortenPipe'
})
export class ShortenPipePipe implements PipeTransform {

  transform(value: string, limit: number): string {
    return value.substr(0, limit) + ' ...';
  }

}
