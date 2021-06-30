import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-countdown',
  templateUrl: './countdown.component.html',
  styleUrls: ['./countdown.component.sass'],
})
export class CountdownComponent implements OnInit {
  countdownMinutes = 3;
  countdownHours = 2;
  countdownDays = 1;

  constructor() {}

  ngOnInit(): void {}
}
