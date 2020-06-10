import { Pipe, PipeTransform } from '@angular/core';
import {isUndefined} from 'util';

@Pipe({
  name: 'ifEmpty'
})
export class IfEmptyPipe implements PipeTransform {

  transform(selectedValue: any, initValue: any): unknown {
    if (isUndefined(selectedValue) || selectedValue === null || selectedValue === '') {
      return initValue;
    }
    return selectedValue;
  }

}
