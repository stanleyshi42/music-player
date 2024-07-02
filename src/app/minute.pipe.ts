import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'minute',
})
export class Minute implements PipeTransform {
  transform(seconds: number): string {
    const minutes: number = Math.floor(seconds / 60);
    return (
      minutes.toString() +
      ':' +
      (seconds % 60).toString().padStart(2, '0')
    );
  }
}
