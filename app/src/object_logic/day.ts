import { DateTime } from 'luxon';

export default class Day {
    private day: DateTime;
    private selected: boolean;
    private isEndDay: boolean;
    private isStartDay: boolean;
    private colored: boolean;
    private weekday: { id: number, dayName: string };
    private inCurrentMonth: boolean;

    constructor(day: DateTime, 
                selected: boolean, 
                isEndDay: boolean, 
                isStartDay: boolean, 
                colored: boolean, 
                inCurrentMonth: boolean,
                weekday: { id: number, dayName: string }) {
        this.day = day;
        this.selected = selected;
        this.isEndDay = isEndDay;
        this.isStartDay = isStartDay;
        this.colored = colored
        this.weekday = weekday;
        this.inCurrentMonth = inCurrentMonth
    }

    getDay(): number {
        return this.day;
    }

    setDay(value: number) {
        this.day = value;
    }  

    getSelected(): boolean {
        return this.selected;
    }

    setSelected(value: boolean) {
        this.selected = value;
    }

    getIsEndDay(): boolean {
        return this.isEndDay;
    }

    setIsEndDay(value: boolean) {
        this.isEndDay = value;
    }

    getIsStartDay(): boolean {
        return this.isStartDay;
    }

    setIsStartDay(value: boolean) {
        this.isStartDay = value;
    }

    getWeekday(): { id: number, dayName: string } {
        return this.weekday;
    }

    setWeekday(value: { id: number, dayName: string }) {
        this.weekday = value;
    }

    getColored(): boolean {
        return this.colored;
    }

    setColored(value: boolean) {
        this.colored = value;
    }
} 

