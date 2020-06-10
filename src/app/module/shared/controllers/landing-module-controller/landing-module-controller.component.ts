import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-landing-module-controller',
  templateUrl: './landing-module-controller.component.html',
  styleUrls: ['./landing-module-controller.component.scss']
})
export class LandingModuleControllerComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
    console.log('carico LandingModuleControllerComponent');
  }

}
