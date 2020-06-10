import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {MatSlideToggleChange} from "@angular/material/slide-toggle";

@Component({
  selector: 'app-roast-toggle-filter',
  templateUrl: './roast-toggle-filter.component.html',
  styleUrls: ['./roast-toggle-filter.component.scss']
})
export class RoastToggleFilterComponent implements OnInit {
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
