import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { NgbDateStruct, NgbDateParserFormatter } from "@ng-bootstrap/ng-bootstrap";

import { Building } from '../models/building';
import { BuildingService } from '../services/building.service';

import { Room } from '../models/room';
import { RoomService } from '../services/room.service';

export class DateParserFormatter extends NgbDateParserFormatter {
    parse(value: string): NgbDateStruct {
      return {
        year: +value.substring(0,4),
        month: +value.substring(5,7),
        day: +value.substring(8,10)
      };
    }
    
    format(date: NgbDateStruct): string {
      return `${date.year}-${date.month}-${date.day}`;
    }
}

@Component({
  selector: 'search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {
  // Date config options
  date: NgbDateStruct;
  
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
    plugins: ['remove_button'],
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
    private route: ActivatedRoute,
    private router: Router,
    private dateFormatter: DateParserFormatter) { }

  ngOnInit() {
    this.date = this.dateFormatter.parse(this.convertDateToQueryParamString(new Date()));
    this.buildingService.getBuildings().then(bs => this.buildings = bs);
    this.roomService.getRooms().then(rs => this.allRooms = rs);
    this.updateQueryParams();
    
    // Retrieve the query parameters
    this.route.queryParamMap.subscribe(pmap => {
      // Enable calendar if we have enough query parameters in the URL
      if (pmap.has('date') && pmap.has('buildings') && pmap.get('buildings'))
      {
        this.hasActiveQuery = true;
      } else {
        this.hasActiveQuery = false;
      }
      
      // Update inputs based on query parameters
      if (pmap.has('date')) {
        this.date = this.dateFormatter.parse(pmap.get('date'));
      }
      if (pmap.has('buildings')) {
        this.selectedBuildings = (pmap.get('buildings') || '').split(',');
      }
      if (pmap.has('rooms')) {
        this.selectedRooms = (pmap.get('rooms') || '').split(',');
      }
      if (pmap.has('minCapacity') || pmap.has('maxCapacity')) {
        var min = pmap.get('minCapacity');
        if (min) {
          this.capacityRange[0] = +min;
        }
        var max = pmap.get('maxCapacity');
        if (max) {
          this.capacityRange[1] = +max;
        }
        this.filterByCapacity = true;
      }
    });
  }
  
  // Search form value change events
  
  onDateChanged() {
    this.updateQuery();
  }
  
  onCapacityChecked() {
    this.updateQuery();
  }
  
  onCapacityRangeChanged(newRange) {
    this.updateQuery();
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
    
    this.updateQuery();
  }
    
  onRoomsValueChanged(value) {
    this.updateQuery();
  }
  
  // Private functions
  
  /**
   * Update query parameters locally,
   * and then force a search to occur.
   */
  updateQuery() {
    this.updateQueryParams();
    this.refreshSearch();
  }
  
  /**
   * Push query parameters to router URL.
   * This should trigger this.route.queryParamMap to update,
   * which will cause a search to trigger immediately.
   */
  refreshSearch() {
    this.router.navigate(['./'], {
      relativeTo: this.route,
      queryParams: this.queryParams
    });
  }
  
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
    if (!date) {
      return '';
    }
    
    if (date.format) {
      return `${date.format('YYYY-MM-DD')}`;
    } else if (date.getUTCFullYear && date.getUTCMonth && date.getDate) {
      return `${date.getUTCFullYear()}-${date.getUTCMonth()+1}-${date.getDate()}`;
    } else if (date.year && date.month && date.day) {
      return `${date.year}-${date.month}-${date.day}`;
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
