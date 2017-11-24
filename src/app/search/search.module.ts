import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

import { CalendarModule } from 'app/calendar/calendar.module';
import { SearchComponent, DateParserFormatter } from './search.component';

import { NouisliderModule } from 'ng2-nouislider';
import { NgSelectizeModule } from 'ng-selectize';
import { NgDatepickerModule } from 'ng2-datepicker';

const routes = [
  { path: '', component: SearchComponent }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    NgDatepickerModule,
    NouisliderModule,
    NgSelectizeModule,
    CalendarModule,
    NgbModule,
    RouterModule.forChild(routes)
  ],
  declarations: [
    SearchComponent
  ],
  providers: [
    DateParserFormatter
  ],
  exports: [ ]
})
export class SearchModule { }
