import {Pipe, PipeTransform} from '@angular/core';

@Pipe({
  name: 'maxQuantity'
})
export class MaxQuantityPipe implements PipeTransform {

  transform(currentValue: number, maxQuantity: number): number {
    //console.log(currentValue > maxQuantity);
    return currentValue > maxQuantity ? maxQuantity : currentValue;
  }

}
