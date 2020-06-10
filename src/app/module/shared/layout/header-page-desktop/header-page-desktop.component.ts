import {Component, OnInit} from '@angular/core';
import {UserService} from '../../../core/service/user.service';
import {ActivatedRoute, Router} from '@angular/router';

@Component({
  selector: 'app-header-page-desktop',
  templateUrl: './header-page-desktop.component.html',
  styleUrls: ['./header-page-desktop.component.scss']
})
export class HeaderPageDesktopComponent implements OnInit {

  userInfo$ = this.userService.onChangeUser$;
  selectedProductCategory = 'Tea';
  searchQuery: string;

  constructor(private userService: UserService,
              private router: Router,
              private activeRouter: ActivatedRoute) {
  }

  ngOnInit(): void {
    this.userService.getUserInfo().subscribe();
    if ('search' === this.activeRouter.snapshot.firstChild.routeConfig.path) {
      this.selectedProductCategory = this.activeRouter.snapshot.queryParamMap.get('searchType');
      this.searchQuery = this.activeRouter.snapshot.queryParamMap.get('query');
    }
  }

  onQuerySearch(querySearch: string) {
    this.router.navigate(['/search'], {
      queryParams: {
        searchType: this.selectedProductCategory.toUpperCase(),
        query: querySearch
      }
    });
  }

  onSearchProductCategory(productCategory: string) {
    this.selectedProductCategory = productCategory;
  }
}
