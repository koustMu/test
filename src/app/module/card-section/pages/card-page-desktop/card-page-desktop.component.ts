import {Component, OnInit} from '@angular/core';
import {ProductCardService} from '../../../core/service/product-card.service';
import {ActivatedRoute} from '@angular/router';

@Component({
  selector: 'app-card-page-desktop',
  templateUrl: './card-page-desktop.component.html',
  styleUrls: ['./card-page-desktop.component.scss']
})
export class CardPageDesktopComponent implements OnInit {

  ratingSectionCard$ = this.cardService.onChangeRatingSectionCard$;
  additionalInformation$ = this.cardService.onChangeAdditionalInformation$;

  constructor(private cardService: ProductCardService,
              private router: ActivatedRoute) {
  }

  ngOnInit(): void {
  this.router.params.subscribe(params => {
    this.cardService.getProductById(this.router.snapshot.params.id).subscribe();
    });
  }

}
