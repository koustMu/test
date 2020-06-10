import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';

@Component({
  selector: 'app-search-bar-header',
  templateUrl: './search-bar-header.component.html',
  styleUrls: ['./search-bar-header.component.scss']
})
export class SearchBarHeaderComponent implements OnInit {
  @Input() searchQuery: string;
  @Output() onSearch: EventEmitter<string> = new EventEmitter<string>();

  constructor() {
  }

  ngOnInit(): void {
  }


  onQuerySearch() {
    this.onSearch.emit(this.searchQuery);
  }
}
