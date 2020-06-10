import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'slitString'
})
export class SlitStringPipe implements PipeTransform {

  transform(value: string): string {
    return value.replace( /([A-Z])/g, ' $1' );
  }

}
