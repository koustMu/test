import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'capitalCase'
})
export class CapitalCasePipe implements PipeTransform {

  transform(selectedValue: string): string {
    return selectedValue.charAt(0).toUpperCase() + selectedValue.slice(1).toLowerCase();
  }


}
