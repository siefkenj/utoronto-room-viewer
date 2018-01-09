import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { environment } from '../../environments/environment';
import 'rxjs/add/operator/toPromise';

import { Booking } from '../models/booking';
import { Room } from '../models/room';

@Injectable()
export class BookingService {
  bookingCache: {[roomIdDate: string]: Booking[]} = { };
  
  constructor(private http: Http) { }
  
  /**
   * Retrieve Booking data.
   * This requires a Room and a date to dynamically query for results.
   */
  getBookingsForRoom(room: Room, date: Date): Promise<Booking[]> {
    if (!room) {
      return Promise.reject("Room input was not supplied to the booking service.");
    }
    if (!date) {
      return Promise.reject("Date input was not supplied to the booking service.");
    }
    
    let cacheValue = this.getBookingsFromCache(room, date);
    if (cacheValue) {
      return Promise.resolve(cacheValue);
    }
    
    // Build query URL
    let baseUrl = environment['bookingBaseUrl'];
    if (!baseUrl) {
      return Promise.reject("NO 'bookingBaseUrl' configured in the current environment.");
    }
    let dateStr = this.dateToRequestTimestamp(date);
    let queryParams = `bldg=${room.bldg}&room=${room.room}&date=${dateStr}`;
    let urlJoiner = baseUrl.endsWith('?') || queryParams.startsWith('?') ? "": "?";
    let queryUrl = `${baseUrl}${urlJoiner}${queryParams}`;
    
    // Send request to URL
    return this.http.get(queryUrl)
      .toPromise()
      .then(response => {
        let rawData = response.json();
        let bookings = rawData.bookings as Booking[];
        // Ensure we only return bookings for the current date
        // (service might return values for the full week)
        bookings = bookings.filter(booking => {
          return booking.time.startsWith(dateStr);
        });
        this.storeBookingsInCache(room, date, bookings);
        return bookings;
      });
  }
  
  private getBookingsFromCache(room: Room, date: Date): Booking[] {
    let id = this.convertRoomDateToCacheId(room, date);
    return this.bookingCache[id];
  }
  
  private storeBookingsInCache(room: Room, date: Date, bookings: Booking[]): void {
    let id = this.convertRoomDateToCacheId(room, date);
    this.bookingCache[id] = bookings;
  }
  
  private convertRoomDateToCacheId(room: Room, date: Date) : string {
    return `${room.id}-${this.dateToRequestTimestamp(date)}`;
  }
  
  /**
   * Convert Date object into a string, with format "YYYYMMDD"
   */
  private dateToRequestTimestamp(date: Date): string {
    if (!date) { return null; }
    return `${date.getUTCFullYear()}${date.getUTCMonth()+1 < 10 ? "0": ""}${date.getUTCMonth()+1}${date.getUTCDate() < 10 ? "0": ""}${date.getUTCDate()}`;
  }
}
