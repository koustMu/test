import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';

@Component({
  selector: 'app-drop-down-type-header',
  templateUrl: './drop-down-type-header.component.html',
  styleUrls: ['./drop-down-type-header.component.scss']
})
export class DropDownTypeHeaderComponent implements OnInit {
  @Input() selectedProductCategory: string;
  @Output() onSearchProductCategory: EventEmitter<string> = new EventEmitter<string>()

  constructor() { }

  ngOnInit(): void {
  }

  onChangeProductCategory(productCategory: string) {
    this.onSearchProductCategory.emit(productCategory);
  }
}
