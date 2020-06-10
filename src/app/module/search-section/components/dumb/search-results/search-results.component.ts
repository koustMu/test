import {Component, Input, OnDestroy, OnInit} from '@angular/core';
import {teascannerAnimations} from "../../../../shared/animations/teascanner-animations";
import {takeUntil} from "rxjs/operators";
import {Subject} from "rxjs";
import {ProductCardResource} from "../../../../core/api/SearchResponse";
import {SearchService} from "../../../../core/service/search.service";
import {animate, animation, style} from "@angular/animations";

const customAnimation = animation([
  style({
    opacity: '{{opacity}}',
    transform: 'scale({{scale}}) translate3d({{x}}, {{y}}, {{z}})'
  }),
  animate('{{duration}} {{delay}} cubic-bezier(0.0, 0.0, 0.2, 1)', style('*'))
], {
  params: {
    duration: '200ms',
    delay: '0ms',
    opacity: '0',
    scale: '1',
    x: '0',
    y: '0',
    z: '0'
  }
});


@Component({
  selector: 'app-search-results',
  templateUrl: './search-results.component.html',
  styleUrls: ['./search-results.component.scss'],
  animations: teascannerAnimations
})
export class SearchResultsComponent implements OnInit, OnDestroy {

  searchResults: ProductCardResource[];
  private _unsubscriber: Subject<any>;

  constructor(private searchService: SearchService) {
    this._unsubscriber = new Subject();
  }

  ngOnInit(): void {
    this.searchService.onSearchChanged$
      .pipe(takeUntil(this._unsubscriber))
      .subscribe(products => {
        this.searchResults = products.results;
      });
  }

  ngOnDestroy(): void {
    this._unsubscriber.next();
    this._unsubscriber.complete();
  }


}
