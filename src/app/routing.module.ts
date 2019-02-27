import { NgModule } from '@angular/core';
import {
  Routes,
  RouterModule
} from '@angular/router';
import { TextBoxComponent } from './components/text-box/text-box.component';
import { HomeComponent } from './components/home/home.component';
import { ComboBoxComponent } from './components/combo-box/combo-box.component';
import { AutocompleteTextInputComponent } from './components/autocomplete-text-input/autocomplete-text-input.component';
import { PersonalizedInputComponent } from './components/personalized-input/personalized-input.component';
import { AutocompleteComplexComponent } from './components/autocomplete-complex/autocomplete-complex.component';
import { MultiSelectComponent } from './components/multi-select/multi-select.component';

const ROUTES: Routes = [
  {
    path: '',
    component: HomeComponent
  },
  {
    path: 'combo',
    component: ComboBoxComponent
  },
  {
    path: 'text-autocomplete',
    component: AutocompleteTextInputComponent
  },
  {
    path: 'text-box',
    component: TextBoxComponent
  },
  {
    path: 'personalized-input',
    component: PersonalizedInputComponent
  },
  {
    path: 'autocomplete-complex',
    component: AutocompleteComplexComponent
  },
  {
    path: 'multi-select',
    component: MultiSelectComponent
  }
];

@NgModule({
  imports: [
    RouterModule.forRoot(ROUTES)
  ],
  exports: [
    RouterModule
  ]
})
export class RoutingModule { }