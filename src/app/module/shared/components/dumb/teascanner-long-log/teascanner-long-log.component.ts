import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-teascanner-long-log',
  templateUrl: './teascanner-long-log.component.html',
  styleUrls: ['./teascanner-long-log.component.scss']
})
export class TeascannerLongLogComponent implements OnInit {
  @Input() whiteLogo = false;

  constructor() { }

  ngOnInit(): void {
  }

}
