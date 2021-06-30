import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CountdownUnitDisplayComponent } from './countdown-unit-display.component';

describe('CountdownUnitDisplayComponent', () => {
  let component: CountdownUnitDisplayComponent;
  let fixture: ComponentFixture<CountdownUnitDisplayComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CountdownUnitDisplayComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CountdownUnitDisplayComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
