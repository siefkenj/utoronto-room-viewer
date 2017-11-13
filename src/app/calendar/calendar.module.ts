import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CalendarComponent } from './calendar.component';
import { CalendarRowComponent } from './calendar-row/calendar-row.component';
import { CalendarItemComponent } from './calendar-item/calendar-item.component';
import { TimestampPipe } from '../pipes/timestamp.pipe';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [
    CalendarComponent,
    CalendarRowComponent,
    CalendarItemComponent,
    TimestampPipe
  ],
  exports: [
    CalendarComponent
  ]
})
export class CalendarModule { }
