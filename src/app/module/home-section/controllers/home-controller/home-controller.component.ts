import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';

@Component({
  selector: 'app-home-controller',
  templateUrl: './home-controller.component.html',
  styleUrls: ['./home-controller.component.scss']
})
export class HomeControllerComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit(): void {
    this.router.navigate(['/home'], { skipLocationChange: true });
  }

}
