import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-addon-badge',
  templateUrl: './addon-badge.component.html',
  styleUrls: ['./addon-badge.component.scss']
})
export class AddonBadgeComponent implements OnInit {

  @Input() badgeAlert;

  constructor() { }

  ngOnInit(): void {
  }

}
