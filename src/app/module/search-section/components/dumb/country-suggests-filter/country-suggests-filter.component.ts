import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';

@Component({
  selector: 'app-country-suggests-filter',
  templateUrl: './country-suggests-filter.component.html',
  styleUrls: ['./country-suggests-filter.component.scss']
})
export class CountrySuggestsFilterComponent implements OnInit {

  @Input() countrySuggestionsState?: { suggestions: string[], searchedValue: string };
  @Output() countrySuggestionChange: EventEmitter<string> = new EventEmitter<string>();
  selectedSuggestion: string;

  constructor() { }

  ngOnInit(): void {
  }

  onSuggestionClick(suggestion: string) {
    this.selectedSuggestion = suggestion;
    this.countrySuggestionChange.emit(suggestion);
  }

}
