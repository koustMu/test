import {Component, EventEmitter, Input, OnInit, Output, ViewEncapsulation} from '@angular/core';
import {MatSlideToggleChange} from "@angular/material/slide-toggle";

@Component({
  selector: 'app-certificated-organic-filter',
  templateUrl: './certificated-organic-filter.component.html',
  styleUrls: ['./certificated-organic-filter.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class CertificatedOrganicFilterComponent implements OnInit {

  @Output() onToggleChanged: EventEmitter<boolean> = new EventEmitter<boolean>();
  @Input() checked: boolean;
  @Input() disabled: boolean;


  constructor() { }

  ngOnInit(): void {
  }

  onToggleChange(event: MatSlideToggleChange) {
    this.onToggleChanged.emit(event.checked);
  }
}
