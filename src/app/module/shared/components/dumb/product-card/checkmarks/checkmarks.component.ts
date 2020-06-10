import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-checkmarks',
  templateUrl: './checkmarks.component.html',
  styleUrls: ['./checkmarks.component.scss']
})
export class CheckmarksComponent implements OnInit {

  /*TODO: inizializzare con quelli dell'oggetto ProductCard: ad oggi non vengono resitutiti dall'API /search  */
  @Input() checkmarks: string[] = ['check di dominio1', 'check di dominio 2'];

  constructor() { }

  ngOnInit(): void {
  }

}
