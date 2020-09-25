import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'squarepipe',
})
export class SquarepipePipe implements PipeTransform {
  transform(value: number, num: number): number {
    return value * num;
  }
}
