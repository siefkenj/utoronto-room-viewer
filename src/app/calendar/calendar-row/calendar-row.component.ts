import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

import { BookingService } from '../../services/booking.service';

import { Room } from '../../models/room';
import { Booking } from '../../models/booking';
import { Reservation } from '../../models/reservation';

@Component({
  selector: 'calendar-row',
  templateUrl: './calendar-row.component.html',
  styleUrls: ['./calendar-row.component.css']
})
export class CalendarRowComponent implements OnInit {
  // Room to display in the calendar row
  @Input() room: Room;
  
  // The calendar's date
  @Input() date: Date|string;
  
  // The columns of the calendar, broken up by hour
  @Input() hours: number[];
  
  @Output() reservationSelected = new EventEmitter<Reservation>();
  
  // An unordered list of Bookings for the input room and date
  bookings: Booking[] = [];
  
  // Determines if a 'Loading' message should be displayed
  // (i.e. bookings not yet queried)
  isLoadingBookings: boolean = false;
  
  constructor(private bookingService: BookingService) { }

  ngOnInit() {
    this.queryRelatedBookings(this.room, this.date);
  }

  /**
   * Find the Bookings for the current room and date
   */
  queryRelatedBookings(room, date) {
    this.isLoadingBookings = true;
    this.bookingService.getBookingsForRoom(room, new Date(date)).then(bks => {
      this.bookings = bks;
      this.isLoadingBookings = false;
    }).catch(() => {
      this.isLoadingBookings = false;
    });
  }
  
  /**
   * Retrieve a booking for a specific hour
   */
  getBookingForHour(date, hour) {
    // Convert date/hour inputs into a timestamp
    let datePortion = this.dateToRequestTimestamp(new Date(date));
    let timePortion = hour;
    let timestamp = `${datePortion}${timePortion}`;
    
    // Search for Booking with a matching timestamp
    let matchingBooking = null;
    if (this.bookings && this.bookings.find) {
      matchingBooking = this.bookings.find(booking => {
        return booking.time === timestamp;
      });
    }
    
    return matchingBooking;
  }
  
  /**
   * Wrap a selected hour in a Reservation, and emit as an output event
   */
  reserveSelection(hour) {
    let reservation = new Reservation(this.room, this.date, hour);
    this.reservationSelected.emit(reservation);
  }
  
  /**
   * Convert Date object into a string, with format "YYYYMMDD"
   */
  private dateToRequestTimestamp(date: Date): string {
    if (!date) { return null; }
    return `${date.getUTCFullYear()}${date.getUTCMonth()+1 < 10 ? "0": ""}${date.getUTCMonth()+1}${date.getUTCDate() < 10 ? "0": ""}${date.getUTCDate()}`;
  }
}
