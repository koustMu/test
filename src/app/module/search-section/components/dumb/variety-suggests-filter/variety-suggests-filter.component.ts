import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';

@Component({
  selector: 'app-variety-suggests-filter',
  templateUrl: './variety-suggests-filter.component.html',
  styleUrls: ['./variety-suggests-filter.component.scss']
})
export class VarietySuggestsFilterComponent implements OnInit {

  @Input() varietySuggestionsState?: { suggestions: string[], searchedValue: string };
  @Output() varietySuggestionChange: EventEmitter<string> = new EventEmitter<string>();
  selectedSuggestion: string;

  constructor() { }

  ngOnInit(): void {
  }

  onSuggestionClick(suggestion: string) {
    this.selectedSuggestion = suggestion;
    this.varietySuggestionChange.emit(suggestion);
  }
}
