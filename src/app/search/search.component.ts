import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { Building } from '../models/building';
import { BuildingService } from '../services/building.service';

import { Room } from '../models/room';
import { RoomService } from '../services/room.service';

@Component({
  selector: 'search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {
  // Date config options
  date = new Date();
  
  // Capacity config options
  filterByCapacity = false;
  sliderMin= 0;
  sliderMax= 700;
  capacityRange = [50, 150];
  sliderConfig={
    pips: {
      mode: 'count',
      values: 8,
      density: 8
    }
  };
  
  // Building config options
  buildings = [];
  buildingsConfig = {
    labelField: 'desc',
    valueField: 'name',
    searchField: ['name', 'desc'],
    maxItems: null,
    plugins: ['remove_button']
  };
  selectedBuildings = [];
  
  // Room config options
  allRooms = [];
  filteredRooms = [];
  roomsConfig = {
    labelField: 'id',
    valueField: 'id',
    searchField: ['id'],
    maxItems: null,
    plugins: ['remove_button']
  };
  selectedRooms = [];
  
  // Consolidated search terms
  queryParams: QueryParams;
  
  // Calendar display trigger
  hasActiveQuery = false;
  
  // Class functions
  
  constructor(
    private buildingService: BuildingService,
    private roomService: RoomService,
    private route: ActivatedRoute) { }

  ngOnInit() {
    this.buildingService.getBuildings().then(bs => this.buildings = bs);
    this.roomService.getRooms().then(rs => this.allRooms = rs);
    this.updateQueryParams();
    
    // Retrieve the query parameters
    this.route.queryParamMap.subscribe(pmap => {
      if (pmap.has('date') && pmap.has('buildings') && pmap.get('buildings'))
      {
        this.hasActiveQuery = true;
      } else {
        this.hasActiveQuery = false;
      }
    });
  }
  
  // Search form value change events
  
  onDateChanged() {
    this.updateQueryParams();
  }
  
  onCapacityChecked() {
    this.updateQueryParams();
  }
  
  onCapacityRangeChanged(newRange) {
    this.updateQueryParams();
  }
  
  onBuildingsValueChanged(value) {
    // Filter Rooms list based on selected building(s)
    if (value && value.length) {
      this.filteredRooms = this.allRooms.filter(room => {
        return value.indexOf(room.bldg) >= 0;
      });
    } else {
      this.filteredRooms = [];
    }
    
    this.updateQueryParams();
  }
    
  onRoomsValueChanged(value) {
    this.updateQueryParams();
  }
  
  // Private functions
  
  /**
   * Trigger the QueryParams to update.
   * If any search value changes, this should be called to keep
   * the Search link up to date.
   */
  private updateQueryParams() {
    let queryParams = new QueryParams();
    queryParams.date = this.convertDateToQueryParamString(this.date);
    queryParams.buildings = this.selectedBuildings.join(',');
    queryParams.rooms = this.selectedRooms.join(',');
    if (this.filterByCapacity) {
      queryParams.minCapacity = this.capacityRange[0];
      queryParams.maxCapacity = this.capacityRange[1];
    }
    
    // Set variable to new object, to force link to recalculate URL
    this.queryParams = queryParams;
  }
  
  /**
   * Helper function to convert a date object into a URL accessible string
   */ 
  private convertDateToQueryParamString(date) {
    if (date.format) {
      return `${date.format('YYYY-MM-DD')}`;
    } else if (date.getUTCFullYear && date.getUTCMonth && date.getDate) {
      return `${date.getUTCFullYear()}-${date.getUTCMonth()+1}-${date.getDate()}`;
    }
    return date.toString();
  }
}

/**
 * Object to consolidate search terms, for use with a Search link
 */
export class QueryParams {
  date: string;
  buildings: string;
  rooms: string;
  minCapacity?: number;
  maxCapacity?: number;
}