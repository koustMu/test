import {Injectable} from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {LogService} from './log.service';
import {BehaviorSubject, Observable} from 'rxjs';
import {CartProductsResponse, Product} from '../api/CartResponse';
import {UpdateCartRequest} from '../api/updateCartRequest';
import {ShippingDetailsResponse} from '../api/shippingDetailsResponse';
import {map, switchMap} from 'rxjs/operators';
import {GlobalVariable} from '../../../globals';
import {isUndefined} from 'util';
import {UserService} from './user.service';

@Injectable({
  providedIn: 'root'
})
export class CartSectionService {

  private productsByVendors$ = new BehaviorSubject<Map<string, Product[]>>(new Map<string, Product[]>());
  onChangeProductsByVendors$ = this.productsByVendors$.asObservable();
  private shippingDetails$ = new BehaviorSubject<ShippingDetailsResponse>(null);
  onChangeShippingDetails$ = this.shippingDetails$.asObservable();


  constructor(private http: HttpClient, private userService: UserService) {
  }

  public getCartByUserId(): Observable<CartProductsResponse> {
    return this.http.get<CartProductsResponse>(`/api/carts/`).pipe(
      switchMap((products) => {
        sessionStorage.setItem(GlobalVariable.sessionStorage.CART_PRODUCTS, JSON.stringify(products));
        if (Object.keys(products.productsByVendor).length !== 0) {
          const productsByVendors = new Map<string, Product[]>();
          for (const vendor in products.productsByVendor) {
            productsByVendors.set(vendor, products.productsByVendor[vendor]);
          }
          this.productsByVendors$.next(productsByVendors);
          this.getShippingDetails(Array.from(productsByVendors.keys())).subscribe();
        }
        return new BehaviorSubject<CartProductsResponse>(products).asObservable();
      }));
  }

  public updateCartProduct(product: Product, quantity: number): Observable<any> {
    const updateCartRequest = new UpdateCartRequest();
    updateCartRequest.productId = product.productId;
    updateCartRequest.variantId = product.variant.id;
    updateCartRequest.quantity = quantity;
    /* TODO cartId*/
    const cartId = '5ececf76bb47943ab4baa6af';

    return this.http.put('api/carts/' + cartId + '/product', updateCartRequest);

  }

  public getShippingDetails(vendors: string[]): Observable<ShippingDetailsResponse> {
    return this.http.get<ShippingDetailsResponse>('api/shipping/' + vendors.toString()).pipe(
      map(
        (data) => {
          this.shippingDetails$.next(data);
          return data;
        }
      ));
  }

  public addProductToCart(cartProduct: {
    productId: string;
    quantity: number;
    type?: string;
    variantId: string;
  }): Observable<any> {
    return this.http.post('/api/carts/products', cartProduct).pipe(
      map(value => {
          this.userService.getUserInfo().subscribe();
        }
      )
    );
  }

  public deleteProductFromCart(productId: string, variantId: string): Observable<any> {
    const cartId = '5ececf76bb47943ab4baa6af';
    return this.http.delete<Observable<any>>('api/carts/' + cartId + '/product/' + productId + '/variant/' + variantId).pipe(
      map(value => {
          this.userService.getUserInfo().subscribe();
        }
      )
    );
  }


  /*========================NO HTTP SERVICE===========================*/

  public updateEditCartFromProduct(event: { product: Product, action: string }) {
    const productByVendor: Map<string, Product[]> = this.productsByVendors$.value;
    switch (event.action) {
      case 'delete': {
        productByVendor.set(event.product.vendorId,
          productByVendor.get(event.product.vendorId).filter(
            (data) => {
              return data.variant.id !== event.product.variant.id;
            }
          ));
        productByVendor.forEach(
          (value, key) => {
            if (value === [] || isUndefined(value) || value.length === 0) {
              productByVendor.delete(key);
              productByVendor.delete(key);
            }
          }
        );
        break;
      }
      case 'update': {
        const index = productByVendor
          .get(event.product.vendorId)
          .indexOf(productByVendor
            .get(event.product.vendorId)
            .filter(
              (data) => {
                return data.variant.id === event.product.variant.id;
              }
            )[0]);
        if (index !== -1) {
          productByVendor.get(event.product.vendorId)[index] = event.product;
        }
        break;
      }
    }
    this.productsByVendors$.next(productByVendor);
  }
}

