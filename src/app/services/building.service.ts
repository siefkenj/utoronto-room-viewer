import { Injectable } from '@angular/core';

import { Building } from '../models/building';
import { BUILDINGS } from './mockups/buildings';

@Injectable()
export class BuildingService {
  constructor() { }
  
  /**
   * Retrieve Building objects.
   * This will include all buildings (no filter options).
   */
  getBuildings(): Promise<Building[]> {
    var rawData = BUILDINGS.data;
    var buildings = rawData.map(jsonObj => {
      return jsonObj.attributes;
    });
    return Promise.resolve(buildings);
  }
}
