import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'totime'
})
export class TotimePipe implements PipeTransform {

  transform(value: number, ...args: unknown[]): string {
    let sec = value % 60;
    let min = Math.floor(value / 60);
    let result = (min < 10 ? '0': '') + min + ' minutes ' + (sec <10 ? '0' : '') + sec + ' secondes';
    return result;
  }

}
