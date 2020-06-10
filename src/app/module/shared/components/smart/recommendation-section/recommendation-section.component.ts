import {Component, OnInit, ViewEncapsulation} from '@angular/core';
import {ProductCardService} from '../../../../core/service/product-card.service';

@Component({
  selector: 'app-recommendation-section',
  templateUrl: './recommendation-section.component.html',
  styleUrls: ['./recommendation-section.component.scss'],
  encapsulation: ViewEncapsulation.None,
})
export class RecommendationSectionComponent implements OnInit {
  products$ = this.cardService.onChangePopularProducts$;
  responsiveOptions: { numScroll: number; numVisible: number; breakpoint: string }[];

  constructor(private cardService: ProductCardService) {

  }

  ngOnInit(): void {
    this.cardService.getPopularProduct().subscribe(
      (data) =>{
        console.log(data);
      }
    );
    this.responsiveOptions = [
      {
        breakpoint: '1260px',
        numVisible: 3,
        numScroll: 3
      },
      {
        breakpoint: '1024px',
        numVisible: 2,
        numScroll: 2,
      },
      {
        breakpoint: '560px',
        numVisible: 1,
        numScroll: 1
      }
    ];
  }


}
