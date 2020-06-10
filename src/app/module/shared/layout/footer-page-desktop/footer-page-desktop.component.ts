import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-footer-page-desktop',
  templateUrl: './footer-page-desktop.component.html',
  styleUrls: ['./footer-page-desktop.component.scss']
})
export class FooterPageDesktopComponent implements OnInit {
  @Input() isFooterWithSubscription: boolean;

  constructor() { }

  ngOnInit(): void {
  }

}
