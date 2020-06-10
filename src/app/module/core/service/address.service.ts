import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {BehaviorSubject, Observable} from 'rxjs';
import {AddressResponse} from '../api/AddressResponse';
import {Country} from '../api/ProductCardResponse';
import {map} from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class AddressService {

  constructor(private http: HttpClient) {
  }

  private address$ = new BehaviorSubject<AddressResponse>(null);
  onChangeAddress$ = this.address$.asObservable();

  public upsertAddress(address: {
    additionalInfo: string,
    address: string,
    addressMoreInfo: string,
    city: string,
    country: Country,
    default: boolean,
    email: string,
    firstName: string,
    id: string,
    lastName: string,
    phoneNumber: string,
    state: string,
    zipCode: string
  }): Observable<AddressResponse> {
    console.log(JSON.stringify(address));
    return this.http.post<AddressResponse>('/api/users/addresses', address).pipe(
      map(
        (data) => {
          this.address$.next(data);
          return data;
        }
      )
    );
  }

  public getAddress(): Observable<AddressResponse> {
    return this.http.get<AddressResponse>('/api/users/addresses').pipe(
      map(
        (data) => {
          this.address$.next(data);
          return data;
        }
      )
    );
  }

  public removeAddress(id: string): Observable<AddressResponse> {
    return this.http.delete<AddressResponse>('/api/users/addresses/' + id).pipe(
      map(
        (data) => {
          this.address$.next(data);
          return data;
        }
      )
    );
  }
}
