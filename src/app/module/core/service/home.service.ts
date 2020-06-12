import {Injectable} from '@angular/core';
import {HttpClient, HttpParams} from '@angular/common/http';
import {BehaviorSubject, Observable} from 'rxjs';
import {ScarcityResponse} from '../api/ScarcityResponse';
import {map} from 'rxjs/operators';
import {Article, ArticlesResponse} from '../api/ArticlesResponse';

@Injectable({
  providedIn: 'root'
})
export class HomeService {

  constructor(private http: HttpClient) {
  }

  private productScarcity$ = new BehaviorSubject<ScarcityResponse>(null);
  onChangeProductScarcity$ = this.productScarcity$.asObservable();

  private articles$ = new BehaviorSubject<ArticlesResponse>(null);
  onChangeAricles$ = this.articles$.asObservable();

  private countries$ = new BehaviorSubject<ArticlesResponse>(null);
  onChangeCountries$ = this.countries$.asObservable();

  public getScarcityProducts(): Observable<ScarcityResponse> {
    return this.http.get<ScarcityResponse>('/api/products/scarcity').pipe(
      map(
        (data) => {
          this.productScarcity$.next(data);
          return data;
        }
      )
    );
  }

  public getCountries(): Observable<ScarcityResponse> {
    return this.http.get<ScarcityResponse>('/api/common/countries').pipe(
      map(
        (data) => {
          this.productScarcity$.next(data);
          return data;
        }
      )
    );
  }

  public getArticles(category?: string, query?: string, tags?: string[], vendorId?: string): Observable<ArticlesResponse> {

    const params = new HttpParams()
    return this.http.get<ArticlesResponse>('/api/articles', {params}).pipe(
      map(
        (data) => {
          this.articles$.next(data);
          return data;
        }
      )
    );
  }
}
