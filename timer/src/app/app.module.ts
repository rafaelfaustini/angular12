import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { CountdownComponent } from './countdown/countdown.component';
import { CountdownUnitDisplayComponent } from './countdown-unit-display/countdown-unit-display.component';

@NgModule({
  declarations: [
    AppComponent,
    CountdownComponent,
    CountdownUnitDisplayComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
