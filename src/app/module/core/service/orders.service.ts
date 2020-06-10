import {Injectable} from '@angular/core';
import {HttpClient, HttpParams} from '@angular/common/http';
import {BehaviorSubject, Observable} from 'rxjs';
import {map} from 'rxjs/operators';
import {OrdersResponse} from '../api/OrdersResponse';
import {isUndefined} from 'util';

@Injectable({
  providedIn: 'root'
})
export class OrdersService {

  private ordersList$ = new BehaviorSubject<OrdersResponse>(null);
  onChangeOrdersList$ = this.ordersList$.asObservable();


  constructor(private http: HttpClient) {
  }

  public getOrders(elements: number, page: number, sortBy?: string, status?: string): Observable<OrdersResponse> {
    let params = new HttpParams()
      .append('size', elements.toString())
      .append('page', page.toString())
      .append('sort', sortBy);
    if (!isUndefined(status) && status !== null) {
      params = params.set('filterByStars', status);
    }
    return this.http.get<OrdersResponse>('api/orders', {params}).pipe(
      map(
        (data) => {
          this.ordersList$.next(data);
          return data;
        }
      )
    );
  }
}
