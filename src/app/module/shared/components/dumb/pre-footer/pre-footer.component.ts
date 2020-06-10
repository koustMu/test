import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-pre-footer',
  templateUrl: './pre-footer.component.html',
  styleUrls: ['./pre-footer.component.scss']
})
export class PreFooterComponent implements OnInit {
  @Input() isFooterWithSubscription: boolean;

  constructor() {
  }

  ngOnInit(): void {
  }
}
