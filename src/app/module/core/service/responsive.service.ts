import { Injectable } from '@angular/core';
import {Observable, Subject} from 'rxjs';


@Injectable()
export class ResponsiveService {
  private isMobile = new Subject();
  public screenWidth: string;


  constructor() {
    this.checkWidth();
  }

  onMobileChange(status: boolean) {
    this.isMobile.next(status);
  }

  getMobileStatus(): Observable<any> {
    return this.isMobile.asObservable();
  }

  public checkWidth() {
    const width = window.innerWidth;
    if (width <= 400) {
      this.screenWidth = 'sm';
      this.onMobileChange(true);
    } else if (width > 401 && width <= 992) {
      this.screenWidth = 'md';
      this.onMobileChange(false);
    } else {
      this.screenWidth = 'lg';
      this.onMobileChange(false);
    }
  }

}
