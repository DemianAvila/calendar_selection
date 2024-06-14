import { DateTime } from 'luxon';
import Day from '../object_logic/day';

class Calendar {
    private initialDate?: DateTime | undefined;
  private endDate: DateTime | undefined;
  private currentCalendar: { month: number, year: number } | undefined;

  constructor(
    initialDate?: DateTime,
    endDate?: DateTime,
    currentCalendar?: { month: number, year: number }
  ) {
    if (!currentCalendar){
        let now = DateTime.now();
        this.currentCalendar = { month: now.month, year: now.year };
    } else {
        this.currentCalendar = currentCalendar;
    }
    this.endDate = endDate;
    this.initialDate = initialDate;
  }

  getInitialDate(): DateTime | undefined {
    return this.initialDate;
  }

  setInitialDate(value: DateTime | undefined) {
    this.initialDate = value;
  }

  getEndDate(): DateTime | undefined {
    return this.endDate;
  }

  setEndDate(value: DateTime | undefined) {
    this.endDate = value;
  }

  getCurrentCalendar(): { month: number, year: number } | undefined {
    return this.currentCalendar;
  }

  setCurrentCalendar(value: { month: number, year: number } | undefined) {
    this.currentCalendar = value;
  }

  getCurrentMonthCalendar(): Day[] {
    let monthStarts = DateTime.local(this.currentCalendar.year, this.currentCalendar.month, 1);
    let cursor = monthStarts;
    let days: Day[] = [];
    while(cursor.month === monthStarts.month) {
        days.push(
            new Day(cursor, 
                false, 
                false, 
                false, 
                false,
                true,
                { id: cursor.weekday, dayName: cursor.weekdayLong }
            )
        );
        cursor = cursor.plus({ days: 1 });
    }
    return days;
  }

}

export default Calendar;
