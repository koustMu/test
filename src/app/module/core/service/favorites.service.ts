import {Injectable} from '@angular/core';
import {BehaviorSubject, Observable} from 'rxjs';
import {HttpClient, HttpHeaders, HttpParams} from '@angular/common/http';
import {isUndefined} from 'util';
import {map} from 'rxjs/operators';
import {FavoriteListResponse, FavoritesProductsResponse} from '../api/FavoritesResponse';
import {UpsertFavorites} from '../api/favorites/UpsertFavorites';

@Injectable({
  providedIn: 'root'
})
export class FavoritesService {

  constructor(private http: HttpClient) {
  }

  private favoritesList$ = new BehaviorSubject<FavoriteListResponse>(null);
  private favoritesProducts$ = new BehaviorSubject<FavoritesProductsResponse>(null);
  private upsertFavorites$ = new BehaviorSubject<UpsertFavorites>(null);

  onChangeFavoriteList$ = this.favoritesList$.asObservable();
  onChangeFavoriteProducts$ = this.favoritesProducts$.asObservable();
  onChangeUpsertFavorites$ = this.upsertFavorites$.asObservable();

  public getFavoritesProductsByListId(page: number, elements: number, prodCategory?: string, listId?: string): Observable<FavoritesProductsResponse> {
    let params = new HttpParams()
      .append('pagination.elements', elements.toString())
      .append('pagination.page', page.toString());
    if (!isUndefined(prodCategory) && prodCategory !== null) {
      params = params.set('filterCriteria.prodCategory', prodCategory);
    }
    if (!isUndefined(listId) && listId !== null) {
      params = params.set('listId', listId);
    }
    return this.http.get<FavoritesProductsResponse>('/api/favorites', {params}).pipe(
      map(
        (data) => {
          this.favoritesProducts$.next(data);
          return data;
        }
      )
    );
  }

  public getFavoriteLists(): Observable<FavoriteListResponse> {
    return this.http.get<FavoriteListResponse>('/api/favorites/lists').pipe(
      map(
        (data) => {
          this.favoritesList$.next(data);
          return data;
        }
      )
    );
  }

  public upsertFavoritesProduct(productId: string): Observable<UpsertFavorites> {
    const headers = new HttpHeaders();
   // headers.append('Content-Type', 'application/json');
    headers.append('Authorization', 'Basic cGxhbmV0OTEwQGdtYWlsLmNvbTpkZXYtMjAyMC1kYWlDYXp6bw==');
    return this.http.put<UpsertFavorites>('/api/favorites/products/' + productId, null, {headers}).pipe(
      map(
        (data) => {
          this.upsertFavorites$.next(data);
          return data;
        }
      )
    );
  }
}
