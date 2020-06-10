import {Injectable} from '@angular/core';
import {BehaviorSubject, Observable} from 'rxjs';
import {FilterResource, SearchResponse} from '../api/SearchResponse';
import {HttpClient, HttpParams} from '@angular/common/http';
import {SearchParams} from '../api/SearchParams';
import {map} from 'rxjs/operators';
import {isUndefined} from 'util';
import {ActivatedRoute, ParamMap, Router} from "@angular/router";
import {addHeaders} from "../../search-section/utils/HttpUtils";

@Injectable({
  providedIn: 'root'
})
export class SearchService {

  private _search$ = new BehaviorSubject<SearchResponse>({filters: new Map<string, FilterResource[]>(), results: []});
  onSearchChanged$ = this._search$.asObservable();
  queryParams: ParamMap;

  constructor(private http: HttpClient, private activatedRoute: ActivatedRoute, private router: Router) {
    this.activatedRoute.queryParamMap.subscribe(queryParams => {
      this.queryParams = queryParams;
      this.search();
    });
  }

  ngOnInit(): void {
  }

  public search2(searchParams?: SearchParams): Observable<SearchResponse> {
    let params = new HttpParams();
    if (!isUndefined(searchParams) && searchParams !== null) {
      Object.entries(searchParams).map(
        (entry) => {
          params = params.append(entry[0].toString(), entry[1].toString());
        }
      );
    }
    return this.http.get<SearchResponse>('/api/products', {params}).pipe(
      map(
        (data) => {
          const filterMap = new Map<string, FilterResource[]>();
          Object.entries(data.filters).map(
            (keyValue) => {
              filterMap.set( keyValue[0], keyValue[1]);
            }
          );
          data.filters = filterMap;
          this._search$.next(data);
          return data;
        }
      )
    );
  }


  /**
   * Call API /products
   */
  search(searchParams?: SearchParams): Promise<SearchResponse> {
    return new Promise((resolve, reject) => {
      this.http.get<SearchResponse>('api/products?searchType=tea', {
        headers: addHeaders(),
        params: this.buildQueryParams()
      })
        .subscribe((response: SearchResponse) => {
          this._search$.next(response);
          resolve(response);
        }, reject);
    });
  }

  buildQueryParams(): HttpParams {
    let params: HttpParams = new HttpParams();

    if (this.queryParams.keys.length > 0) {
      this.queryParams.keys.forEach(param => {
        const value = this.queryParams.get(param);
        params = params.set(param, value);
      })
    }
    return params;
  }


}
