import { Component, OnInit } from '@angular/core';
import {icons} from "../../../../../shared/icons";
import { FormControl } from '@angular/forms';

@Component({
  selector: 'app-bar-search-home',
  templateUrl: './bar-search-home.component.html',
  styleUrls: ['./bar-search-home.component.scss']
})
export class BarSearchHomeComponent implements OnInit {
  options = ['Tea', 'Coffee', 'Option3', 'Option4'];
  constructor() { }
  searchControl=new FormControl('');

  ngOnInit(): void {
  }

}
