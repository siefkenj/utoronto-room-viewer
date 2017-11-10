import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';

import { SearchComponent } from './search.component';

import { DatePickerModule } from 'angular-io-datepicker';
import { NouisliderModule } from 'ng2-nouislider';
import { NgSelectizeModule } from 'ng-selectize';

const routes = [
  { path: '', component: SearchComponent }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    DatePickerModule,
    NouisliderModule,
    NgSelectizeModule,
    RouterModule.forChild(routes)
  ],
  declarations: [
    SearchComponent
  ],
  exports: [ ]
})
export class SearchModule { }
