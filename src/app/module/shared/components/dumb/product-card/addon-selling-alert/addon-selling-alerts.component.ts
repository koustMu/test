import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-addon-selling-alert',
  templateUrl: './addon-selling-alerts.component.html',
  styleUrls: ['./addon-selling-alerts.component.scss']
})
export class AddonSellingAlertsComponent implements OnInit {

  @Input() sellingAlerts: string[];

  constructor() {
  }

  ngOnInit(): void {
  }

}
