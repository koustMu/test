import {Pipe, PipeTransform} from '@angular/core';
import {SearchResponse} from '../../core/api/SearchResponse';
import {GlobalVariable} from '../../../globals';
import {Country} from '../../core/api/ProductCardResponse';

@Pipe({
  name: 'filterCountries'
})
export class FilterCountriesPipe implements PipeTransform {


  transform(searchResponse: SearchResponse): Country[] {
    return JSON.parse(localStorage.getItem(GlobalVariable.localStorage.COUNTRIES_LIST)).filter(
      (country: Country) => {
        return searchResponse.filters.get('country').map(
          (filterValue) => {
            return filterValue.value;
          }
        ).indexOf(country.code.toLowerCase()) >= 0;
      }
    );
  }

}
