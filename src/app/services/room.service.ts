import { Injectable } from '@angular/core';
import { ParamMap } from '@angular/router';

import { Room } from '../models/room';
import { ROOMS } from './mockups/rooms';

@Injectable()
export class RoomService {
  constructor() { }
  
  /**
   * Retrieve Rooms data.
   * Pass in a ParamMap object with allowed values to filter results.
   * If any filter option is missing, the option will accept all rooms.
   * Currently supported filter options: 
   *   buildings (comma-separated list of building names)
   *   rooms (comma-separated list of room names or ids)
   *   minCapacity (numeric minimum allowed capacity)
   *   maxCapacity (numeric maximum allowed capacity)
   */
  getRooms(filterParams?: ParamMap): Promise<Room[]> {
    // Read JSON data
    var rawData = ROOMS.data;
    var rooms = rawData.map(jsonObj => {
      return jsonObj.attributes;
    }).map(this.injectRoomId);
    
    // Filter results if parameters are provided
    if (filterParams) {
      // Filter by building name
      let buildingsFilter = filterParams.get('buildings');
      if (buildingsFilter) {
        let buildingsFilterArray = buildingsFilter.split(',');
        rooms = rooms.filter(room => {
          return buildingsFilterArray.indexOf(room.bldg) >= 0;
        });
      }
      
      // Filter by room name or id
      let roomsFilter = filterParams.get('rooms');
      if (roomsFilter) {
        let roomsFilterArray = roomsFilter.split(',');
        rooms = rooms.filter(room => {
          return roomsFilterArray.indexOf(room.room) >= 0 ||
                 roomsFilterArray.indexOf(room.id) >= 0;
        });
      }
      
      // Filter by min capacity
      let minCapacityFilter = filterParams.get('minCapacity');
      if (minCapacityFilter) {
        
        // Confirm we actually have a numeric value
        let minCapacityFilterNum = +minCapacityFilter;
        if (!isNaN(minCapacityFilterNum)) {
          rooms = rooms.filter(room => {
            // Allow rooms without capacity information
            return !room.capacity || room.capacity >= minCapacityFilterNum;
          });
        }
      }
      
      // Filter by max capacity
      let maxCapacityFilter = filterParams.get('maxCapacity');
      if (maxCapacityFilter) {
        
        // Confirm we actually have a numeric value
        let maxCapacityFilterNum = +maxCapacityFilter;
        if (!isNaN(maxCapacityFilterNum)) {
          rooms = rooms.filter(room => {
            // Allow rooms without capacity information
            return !room.capacity || room.capacity <= maxCapacityFilterNum;
          });
        }
      }
    }
    return Promise.resolve(rooms);
  }
  
  /**
   * Rooms do not include a unique identifier.
   * This merges the building name and room name into an 'id' attribute.
   */
  private injectRoomId(room: Room): Room {
    if (room) {
      room.id = `${room.bldg}${room.room}`;
    }
    return room;
  }
}
