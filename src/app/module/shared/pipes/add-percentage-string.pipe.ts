import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'addPercentageString'
})
export class AddPercentageStringPipe implements PipeTransform {

  transform( selectedValue: number): string {
    return selectedValue + '%';
  }

}
