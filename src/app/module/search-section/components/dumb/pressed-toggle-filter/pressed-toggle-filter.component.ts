import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {MatSlideToggleChange} from "@angular/material/slide-toggle";

@Component({
  selector: 'app-pressed-toggle-filter',
  templateUrl: './pressed-toggle-filter.component.html',
  styleUrls: ['./pressed-toggle-filter.component.scss']
})
export class PressedToggleFilterComponent implements OnInit {

  @Output() onToggleChanged: EventEmitter<boolean> = new EventEmitter<boolean>();
  @Input() checked;
  @Input() disabled;

  constructor() { }

  ngOnInit(): void {
  }

  onToggleChange(event: MatSlideToggleChange) {
    this.onToggleChanged.emit(event.checked);
  }

}
