import {Component, OnInit} from '@angular/core';
import {ActivatedRoute} from '@angular/router';

@Component({
  selector: 'app-user-page-desktop',
  templateUrl: './user-page-desktop.component.html',
  styleUrls: ['./user-page-desktop.component.scss']
})
export class UserPageDesktopComponent implements OnInit {

  frameSelected: string;

  constructor(private activeRoutes: ActivatedRoute) {
  }

  ngOnInit(): void {
    this.frameSelected = this.activeRoutes.snapshot.firstChild.routeConfig.path;
  }
}
