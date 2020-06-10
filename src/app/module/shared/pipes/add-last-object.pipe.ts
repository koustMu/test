import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'addLastObject'
})
export class AddLastObjectPipe implements PipeTransform {

  transform(value: object[]): object[] {
    value.push(null);
    return value;
  }

}
