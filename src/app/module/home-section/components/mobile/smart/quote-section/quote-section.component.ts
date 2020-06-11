import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-quote-section',
  templateUrl: './quote-section.component.html',
  styleUrls: ['./quote-section.component.scss']
})
export class QuoteSectionComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  handle(evt): void {
    document.getElementById('1').style.borderBottomColor = 'black';
    document.getElementById('2').style.borderBottomColor = 'black';
    document.getElementById('3').style.borderBottomColor = 'black';
    document.getElementById('4').style.borderBottomColor = 'black';
    document.getElementById('1p').style.color = 'black';
    document.getElementById('2p').style.color = 'black';
    document.getElementById('3p').style.color = 'black';
    document.getElementById('4p').style.color = 'black';
    document.getElementById('1l').style.color = 'black';
    document.getElementById('2l').style.color = 'black';
    document.getElementById('3l').style.color = 'black';
    document.getElementById('4l').style.color = 'black';
    document.getElementById(evt).style.borderBottomColor = 'red';
    document.getElementById(evt + 'p').style.color = 'red';
    document.getElementById('output').innerText = evt + 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.';
    document.getElementById(evt + 'l').style.color = 'red';
    return;
  }

}
