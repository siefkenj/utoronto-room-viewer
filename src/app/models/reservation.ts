import { Room } from './room';

export class Reservation {
  room: Room;
  date: Date|string;
  hour: number;
  
  constructor(room?: Room, date?: Date|string, hour?: number) {
    this.room = room;
    this.date = date;
    this.hour = hour;
  }
}