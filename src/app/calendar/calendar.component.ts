import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, ParamMap } from '@angular/router';
import { environment } from '../../environments/environment';

import { RoomService } from '../services/room.service';

import { Room } from '../models/room';
import { Reservation } from '../models/reservation';

@Component({
  selector: 'calendar',
  templateUrl: './calendar.component.html',
  styleUrls: ['./calendar.component.css']
})
export class CalendarComponent implements OnInit {
  // Display query parameter filter options
  filterOptions: Object;
  
  // Selected date for the calendar, kept separate in case of formatting elsewhere 
  date: Date|string;
  
  // The hour columns of the calendar
  hours = [9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20];
  
  // Filtered list of rooms
  rooms: Room[];

  constructor(private route: ActivatedRoute, private roomService: RoomService) { }

  ngOnInit() {
    // Retrieve the query parameters
    this.route.queryParamMap.subscribe(pmap => {
      this.setFilterOptions(pmap);
      this.date = pmap.get('date');
      this.queryRooms(pmap).then(rooms => {
        this.rooms = rooms;
      });
    });
  }
  
  /**
   * Retrieve filtered list of rooms based on Query Parameters
   */
  queryRooms(params: ParamMap): Promise<Room[]> {
    return this.roomService.getRooms(params);
  }
  
  /**
   * Send user to room reservation page
   */
  selectReservation(reservation: Reservation) {
    window.open(environment.reservationUrl);
  }
  
  /**
   * Extract the query parameters for displaying the list of Search Options
   */
  private setFilterOptions(params: ParamMap) {
    this.filterOptions = {
      buildings: this.getValueOrDefault(params, 'buildings', 'Any'),
      rooms: this.getValueOrDefault(params, 'rooms', 'Any'),
      minCapacity: this.getValueOrDefault(params, 'minCapacity', 'Any'),
      maxCapacity: this.getValueOrDefault(params, 'maxCapacity', 'Any'),
      date: params.get('date')
    }
  }
  
  /**
   * Helper to read ParamMap values, and supply a default value if no input is supplied.
   * This is meant for displaying query parameter values, not for building queries.
   */
  private getValueOrDefault(params: ParamMap, name: string, defaultValue: any): any {
    // Check if value exists in ParamMap
    if (!params || !name || !params.has(name)) {
      return defaultValue;
    }
    
    // Blank or 'null' values should be treated as if there were no input provided
    let value = params.get(name);
    if (typeof value == "string") {
      if (value.length == 0 || value == 'null') {
        return defaultValue;
      }
    }
    
    // Value from the ParamMap is deemed valid here
    return value;
  }
}
