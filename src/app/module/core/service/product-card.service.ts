import {Injectable} from '@angular/core';
import {BehaviorSubject, Observable} from 'rxjs';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {ProductCardResponse} from '../api/ProductCardResponse';
import {map} from 'rxjs/operators';
import {MostPopularResponse} from '../api/MostPopularResponse';
import {ActivatedRouteSnapshot, CanActivate} from '@angular/router';
import {RecapProductCard} from '../api/card/RecapProductCard';
import {CardUtilsService} from './card-utils.service';
import {AdditionalInformation} from '../api/card/AdditionalInformation';
import {RatingSectionCard} from '../api/card/RatingSectionCard';
import {isUndefined} from 'util';

@Injectable({
  providedIn: 'root'
})
export class ProductCardService {

  constructor(private http: HttpClient, private cardUtils: CardUtilsService) {
  }

  private recapProduct$ = new BehaviorSubject<RecapProductCard>(null);
  onChangeRecapProduct$ = this.recapProduct$.asObservable();
  private additionalInformation$ = new BehaviorSubject<AdditionalInformation>(null);
  onChangeAdditionalInformation$ = this.additionalInformation$.asObservable();
  private ratingSectionCard$ = new BehaviorSubject<RatingSectionCard>(null);
  onChangeRatingSectionCard$ = this.ratingSectionCard$.asObservable();
  private popularProducts$ = new BehaviorSubject<MostPopularResponse>(null);
  onChangePopularProducts$ = this.popularProducts$.asObservable();
  private addInfoDetailMap$ = new BehaviorSubject<Map<string, object>>(null);
  onChangeInfoDetailMap$ = this.addInfoDetailMap$.asObservable();

  public getProductById(url: string): Observable<ProductCardResponse> {
    const headers = new HttpHeaders();
    headers.append('Content-Type', 'application/json');
    headers.append('Authorization', 'Basic cGxhbmV0OTEwQGdtYWlsLmNvbTpkZXYtMjAyMC1kYWlDYXp6bw==');
    return this.http.get<ProductCardResponse>('api/products/' + url, {headers}).pipe(
      map(
        (data) => {
          /* RecapProduct mapping */
          const recapProduct: RecapProductCard = {thumbnailImage: [], variants: []};
          recapProduct.productId = data.id;
          data.images.map(
            (image, index) => {
              recapProduct.thumbnailImage[index] = {
                selectedThumbnail: index === 0 ? 'choose-thumbnail' : 'thumbnail-image-container',
                image
              };
            });
          recapProduct.elevation = data.teaDetails?.elevation;
          recapProduct.reviewData = data.reviewData;
          data.variants.map(
            (variant, index) => {

              recapProduct.variants[index] = {
                isSelected: index === 0,
                variant,
                alertVariant: variant.remainingQuantity < 3 && variant.remainingQuantity > 0 ?
                  {
                    text: (variant.remainingQuantity === 1) ? variant.remainingQuantity + ' piece' : variant.remainingQuantity + ' pieces',
                    class: 'primary-medium-background'
                  } : isUndefined(variant.percentageDiscount) && variant.percentageDiscount === null &&
                  variant.percentageDiscount !== 0 && variant.remainingQuantity > 0 ?
                    {
                      text: variant.percentageDiscount + '% OFF',
                      class: 'forth-medium-background'
                    } : null
              };
            });
          recapProduct.vendorName = data.vendorName;
          recapProduct.vendorId = data.vendorId;
          recapProduct.name = data.name;
          recapProduct.productCategory = data.productCategory;
          recapProduct.years = data.teaDetails?.year;
          recapProduct.type = data.type;
          recapProduct.location = {
            country: data.country,
            region: data.region
          };
          recapProduct.vote = this.cardUtils.getReviewVote(data.reviewData.avg);
          this.recapProduct$.next(recapProduct);
          this.getAdditionInfoDetails(data);
          /* Additional Information mapping */
          const additionalInformation: AdditionalInformation = {};
          additionalInformation.description = data.description;
          additionalInformation.vendorName = data.vendorName;
          this.additionalInformation$.next(additionalInformation);
          /* Rating Section mapping */
          const ratingSectionCard: RatingSectionCard = {};
          ratingSectionCard.reviewData = data.reviewData;
          ratingSectionCard.vote = this.cardUtils.getReviewVote(data.reviewData.avg);
          ratingSectionCard.productType = data.productCategory;
          this.ratingSectionCard$.next(ratingSectionCard);
          return data;
        }
      )
    );
  }

  public getPopularProduct(): Observable<MostPopularResponse> {
    return this.http.get<MostPopularResponse>('/api/products/popular').pipe(
      map(
        (data) => {
          this.popularProducts$.next(data);
          return data;
        }
      )
    );
  }


  /*===================NO HTTP SERVICE======================*/
  private getAdditionalInfoTea(product: ProductCardResponse): void {
    const addInfoDetailMap = new Map<string, object>();

    addInfoDetailMap.set('quality', {
      type: product.type,
      variety: product.teaDetails.variety,
      cultivar: product.teaDetails.cultivar,
      roasted: product.teaDetails.roasted
    });
    addInfoDetailMap.set('picking', {
      year: product.teaDetails.year,
      season: product.teaDetails.season
    });
    addInfoDetailMap.set('location', {
      country: product.country?.name,
      region: product.region,
      elevation: product.teaDetails.elevation
    });
    if (!isUndefined(product.teaDetails.infusionDetails) && product.teaDetails.infusionDetails.length > 0) {
      for (const infusionDetails of product.teaDetails.infusionDetails) {
        addInfoDetailMap.set('infusion-details ' + infusionDetails.style + ' style', {
          style: infusionDetails.style,
          leafQuantity: infusionDetails.leafQuantity,
          waterQuantity: infusionDetails.waterQuantity,
          times: infusionDetails.times.map((time) => '' + time).reduce((preItem, currentItem) => {
            return preItem + '-' + currentItem;
          }),
          centigradeTemp: infusionDetails.centigradeTemp,
          fahrenheitTemp: infusionDetails.fahrenheitTemp,
          totalInfusions: infusionDetails.totalInfusions
        });
      }
    }

    this.addInfoDetailMap$.next(addInfoDetailMap);

  }

  private getAdditionalInfoTeaware(product: ProductCardResponse): void {
    const addInfoDetailMap = new Map<string, object>();

    addInfoDetailMap.set('quality', {
      type: product.type,
      material: product.teawareDetails.material,
      manufacture: product.teawareDetails.manufacture,
      color: product.teawareDetails.color,
      capacity: product.teawareDetails.capacity,
      weight: product.teawareDetails.weight,
      dimension: product.teawareDetails.dimension.height + ' ' + product.teawareDetails.dimension.measureUnit
        + ' - ' + product.teawareDetails.dimension.length + ' ' + product.teawareDetails.dimension.measureUnit
        + ' - ' + product.teawareDetails.dimension.width + ' ' + product.teawareDetails.dimension.measureUnit
    });

    this.addInfoDetailMap$.next(addInfoDetailMap);

  }

  private getAdditionInfoDetails(product: ProductCardResponse) {
    switch (product.productCategory) {
      case 'TEA': {
        this.getAdditionalInfoTea(product);
        break;
      }
      case 'TEAWARE': {
        this.getAdditionalInfoTeaware(product);
        break;
      }
    }
  }
}
