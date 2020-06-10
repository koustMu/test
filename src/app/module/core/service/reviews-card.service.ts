import {Injectable} from '@angular/core';
import {HttpClient, HttpParams} from '@angular/common/http';
import {BehaviorSubject, Observable} from 'rxjs';
import {SortByReviews} from '../api/card/sort-by-reviews.enum';
import {map} from 'rxjs/operators';
import {isUndefined} from 'util';
import {ReviewsCardResponse} from '../api/ReviewsCardResponse';

@Injectable({
  providedIn: 'root'
})
export class ReviewsCardService {

  constructor(private http: HttpClient) {
  }

  private reviewListProduct$ = new BehaviorSubject<ReviewsCardResponse>(null);
  onChangeReviewListProduct$ = this.reviewListProduct$.asObservable();


  public getReviewListByProduct(productId: string, page: number, elements: number, sortBy: SortByReviews, filterByStars?: string): Observable<ReviewsCardResponse> {
    let params = new HttpParams()
      .append('pagination.elements', elements.toString())
      .append('pagination.page', page.toString())
      .append('sortBy', sortBy);
    if (!isUndefined(filterByStars) && filterByStars !== null) {
      params = params.set('filterByStars', filterByStars);
    }
    return this.http.get<ReviewsCardResponse>('/api/review/' + productId, {params}).pipe(
      map(
        (data) => {
          console.log(data);
          this.reviewListProduct$.next(data);
          return data;
        }
      )
    );
  }

  public getReviewListByProductPagination(productId: string, page: number, elements: number, sortBy: SortByReviews, filterByStars?: string): Observable<ReviewsCardResponse> {
    let params = new HttpParams()
      .append('pagination.elements', elements.toString())
      .append('pagination.page', page.toString())
      .append('sortBy', sortBy);
    if (!isUndefined(filterByStars) && filterByStars !== null) {
      params = params.set('filterByStars', filterByStars);
    }
    return this.http.get<ReviewsCardResponse>('/api/review/' + productId, {params}).pipe(
      map(
        (data) => {
          const currentValue = this.reviewListProduct$.value;
          data.reviews.forEach((review) => {
            currentValue.reviews.push(review);
          });
          this.reviewListProduct$.next(
            {
              returnMessages: data.returnMessages,
              reviews: currentValue.reviews,
              moreItems: data.moreItems,
              globalStarCount: data.globalStarCount
            }
          );
          return data;
        }
      )
    );
  }

  public updatelikeFeedback(reviewId: string, isLiked: boolean): Observable<ReviewsCardResponse> {
    const params = new HttpParams()
      .append('isLiked', '' + isLiked);
    return this.http.put<ReviewsCardResponse>('/api/review/like/' + reviewId, params);
  }
}
