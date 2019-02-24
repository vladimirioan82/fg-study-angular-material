import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ReactiveFormsModule } from '@angular/forms';

import { AngularMaterialModule } from './angular-material.module';
import { RoutingModule } from './routing.module';
import { RootComponent } from './components/root/root.component';
import { HomeComponent } from './components/home/home.component';
import { ComboBoxComponent } from './components/combo-box/combo-box.component';
import { MessageComponent } from './components/message/message.component';
import { AutocompleteTextInputComponent } from './components/autocomplete-text-input/autocomplete-text-input.component';

@NgModule({
  imports: [ 
    BrowserModule, 
    FormsModule,
    BrowserAnimationsModule,
    AngularMaterialModule,
    RoutingModule,
    ReactiveFormsModule
  ],
  declarations: [ 
    RootComponent,
    HomeComponent,
    MessageComponent,
    ComboBoxComponent,
    AutocompleteTextInputComponent
  ],
  bootstrap: [ RootComponent ]
})
export class RootModule { }