import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'timestamp'
})
export class TimestampPipe implements PipeTransform {
  
  /**
   * Convert hour (number) into a string, with format 'hhmmss'.
   * Note: since only hour is an input, minutes and seconds will always be '0000'.
   */
  transform(value: any, args?: any): any {
    if (!value) {
      return null;
    }
    return `${+value % 24 < 10 ? "0": ""}${value % 24}0000`;
  }

}
