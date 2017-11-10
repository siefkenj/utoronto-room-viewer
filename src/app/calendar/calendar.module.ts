import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { CalendarComponent } from './calendar.component';
import { CalendarRowComponent } from './calendar-row/calendar-row.component';
import { CalendarItemComponent } from './calendar-item/calendar-item.component';
import { TimestampPipe } from '../pipes/timestamp.pipe';

const routes = [
  { path: '', component: CalendarComponent }
];

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ],
  declarations: [
    CalendarComponent,
    CalendarRowComponent,
    CalendarItemComponent,
    TimestampPipe
  ]
})
export class CalendarModule { }
