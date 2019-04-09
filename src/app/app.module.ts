import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { HelloComponent } from './hello.component';
import {
  MatButtonModule,
  MatCardModule,
  MatChipsModule, MatIconModule, MatInputModule, MatNativeDateModule, MatOptionModule,
  MatRadioModule, MatSelectModule, MatSliderModule,
  MatAutocompleteModule,
  MatCheckboxModule,
  MatExpansionModule,
  MatFormFieldModule,
  MatDatepickerModule
} from '@angular/material';
import { Ng5SliderModule } from 'ng5-slider';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

@NgModule({
  imports:      [
    BrowserModule,
    FormsModule,
    MatDatepickerModule,
    MatFormFieldModule,
    MatInputModule,
    MatNativeDateModule,
    MatSliderModule,
    MatSelectModule,
    MatOptionModule,
    MatExpansionModule,
    MatButtonModule,
    MatCardModule,
    MatCheckboxModule,
    Ng5SliderModule,
    MatIconModule,
    MatAutocompleteModule,
    ReactiveFormsModule,
    FormsModule,
    MatChipsModule,
    MatRadioModule,
    BrowserAnimationsModule
  ],
  declarations: [ AppComponent, HelloComponent ],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
