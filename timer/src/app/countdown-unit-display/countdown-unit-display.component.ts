import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-countdown-unit-display',
  templateUrl: './countdown-unit-display.component.html',
  styleUrls: ['./countdown-unit-display.component.sass'],
})
export class CountdownUnitDisplayComponent {
  @Input() displayNumber = 0;
}
