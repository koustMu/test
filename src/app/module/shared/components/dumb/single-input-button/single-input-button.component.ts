import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-single-input-button',
  templateUrl: './single-input-button.component.html',
  styleUrls: ['./single-input-button.component.scss']
})
export class SingleInputButtonComponent implements OnInit {
  @Input() placeholder: any;

  constructor() { }

  ngOnInit(): void {
  }

}
