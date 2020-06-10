import {BehaviorSubject, from, Observable, Subject} from 'rxjs';
import {VendorInfoResponse} from '../api/VendorInfoResponse';
import {ActivatedRoute, ActivatedRouteSnapshot, Params, Router} from '@angular/router';
import {HttpClient} from '@angular/common/http';
import {Injectable} from '@angular/core';
import {addHeaders} from '../../search-section/utils/HttpUtils';
import {map} from 'rxjs/operators';
import {CardUtilsService} from './card-utils.service';
import {isUndefined} from 'util';

@Injectable({
  providedIn: 'root'
})
export class VendorService {

  private vendorInfo$ = new BehaviorSubject<VendorInfoResponse>(null);
  onVendorInfoChanged$ = this.vendorInfo$.asObservable();


  constructor(private http: HttpClient, private activatedRoute: ActivatedRoute, private cardUtilsService: CardUtilsService) {
  }


  ngOnInit(): void {
    Promise.all([
      // this.getVendorInfoById(this.activatedRoute.snapshot.paramMap.get('id'))
      // this.getVendorInfoById(par),
      // this.getMostPopularTea(),
      // this.getMostPopularAccessories(),
      // this.getRecommendations();
    ])
  }


  /**
   * Call API /vendors
   */
  getVendorInfoById(vendorId: string): Promise<VendorInfoResponse> {
    return new Promise((resolve, reject) => {
      this.http.get<VendorInfoResponse>('api/vendors/' + vendorId).pipe(
        map(
          (data) => {
            data.ranking = !isUndefined(data.ratingDetails) ? this.cardUtilsService.getReviewVote(data.ratingDetails.avg) : undefined;
            this.vendorInfo$.next(data);
            return data;
          }
        )
      )
        .subscribe((response: VendorInfoResponse) => {
          this.vendorInfo$.next(response);
          resolve(response);
        }, reject);
    });
  }


}
