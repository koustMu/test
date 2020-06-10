import { Component, OnInit } from '@angular/core';
import {ResponsiveService} from '../../../../core/service/responsive.service';

@Component({
  selector: 'app-manage-responsive',
  templateUrl: './manage-responsive.component.html',
  styleUrls: ['./manage-responsive.component.scss']
})
export class ManageResponsiveComponent implements OnInit {
  isMobile: boolean;

  constructor(private responsiveService: ResponsiveService) {
  }

  ngOnInit() {
    this.responsiveService.getMobileStatus().subscribe( isMobile => {
    this.isMobile = isMobile;
    });
    this.onResize();
    console.log('Eccolo');
  }

  onResize() {
    this.responsiveService.checkWidth();
  }
}
