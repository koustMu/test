import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {MatSlideToggleChange} from "@angular/material/slide-toggle";

@Component({
  selector: 'app-sample-available-filter',
  templateUrl: './sample-available-filter.component.html',
  styleUrls: ['./sample-available-filter.component.scss']
})
export class SampleAvailableFilterComponent implements OnInit {

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
