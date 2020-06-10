import {Component, EventEmitter, Input, OnInit, Output, ViewEncapsulation} from '@angular/core';
import {MatSliderChange} from '@angular/material/slider';

@Component({
  selector: 'app-elevation-filter',
  templateUrl: './elevation-filter.component.html',
  styleUrls: ['./elevation-filter.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class ElevationFilterComponent implements OnInit {

  @Input() value = 0;
  @Input() min = 0;
  @Input() max = 0;
  @Input() disabled = true;
  @Output() elevationChanged: EventEmitter<number> = new EventEmitter<number>();

  constructor() {
  }

  ngOnInit(): void {
  }

  onValueChange(event: MatSliderChange) {
    this.elevationChanged.emit(event.value);
  }

  onInput(event: MatSliderChange) {
    this.value = event.value
  }
}
