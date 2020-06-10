import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-addon-header',
  templateUrl: './addon-header.component.html',
  styleUrls: ['./addon-header.component.scss']
})
export class AddonHeaderComponent implements OnInit {

  @Input() headerAddon: string = 'limited-deal';

  constructor() { }

  ngOnInit(): void {
  }

}
