import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

import { Booking } from '../../models/booking';

@Component({
  selector: 'calendar-item',
  templateUrl: './calendar-item.component.html',
  styleUrls: ['./calendar-item.component.css']
})
export class CalendarItemComponent implements OnInit {
  @Input() booking: Booking;
  @Input() hour: number;
  @Output() selected = new EventEmitter<number>();

  constructor() { }

  ngOnInit() {
  }
  
  /**
   * Notify selection via output event
   */
  selectReservation() {
    this.selected.emit(this.hour);
  }
}
