import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { ProbabilityCalculatorComponent } from './components/probability-calculator/probability-calculator.component';

@NgModule({
  declarations: [
    AppComponent,
    ProbabilityCalculatorComponent
  ],
  imports: [
    BrowserModule,
    FormsModule 
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
