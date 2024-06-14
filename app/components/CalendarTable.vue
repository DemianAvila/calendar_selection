<template>
    <div class="w-full h-full bg-[#086740] text-[#f9f9f9] rounded flex flex-col">
        <div class="w-[100%] flex flex-row justify-center items-center">
            <div class="w-[14.28%] p-2 flex flex-row justify-center items-center" v-for="day in weekdays" :key="day.code">
                {{ day.shortCode }}
            </div>
        </div>
        <div class="w-[100%] flex flex-row p-2" v-if="monthCalendar" v-for="(week, index) in splitMonthWeeks()" :key="index"> 
            <div class="w-[14.28%] px-2" v-for="i in 7" :key="i" >
                {{ Object.keys(week[i-1]) }}
                <DayController :day="week[i-1]" v-if="week[i-1] === i"/>
            </div>
        </div>
        <div class="w-[100%] h-[95%] flex flex-row justify-center items-center" v-else >
            <ProgressSpinner  />
        </div>

    </div>
</template>

<script>
    import Day from '../src/object_logic/day.ts'
    export default {
        props: ['monthCalendar'],
        data () {
            return {
                weekdays: [
                    { name: 'Monday', shortCode: 'Mon', code: '1' },
                    { name: 'Tuesday', shortCode: 'Tue', code: '2' },
                    { name: 'Wednesday', shortCode: 'Wed', code: '3' },
                    { name: 'Thursday', shortCode: 'Thu', code: '4' },
                    { name: 'Friday', shortCode: 'Fri', code: '5' },
                    { name: 'Saturday', shortCode: 'Sat', code: '6' },
                    { name: 'Sunday', shortCode: 'Sun', code: '7' }
                ], 
                calendar: null
            }
        },
        methods: {
            splitMonthWeeks() {
                let cal = this.monthCalendar;
                /********************** 
                let weeks = [];
                let week = [];
                let weekBegin = 1;
                let weekMonthStart = cal[0].getWeekday().id;
                let current_day = cal[0].day;
                let fillWeek = []
                for (weekBegin; weekBegin < weekMonthStart ; weekBegin++) {
                    current_day = current_day.minus({ days: 1 })
                    fillWeek.push(new Day(
                        current_day,
                        false, 
                        false, 
                        false, 
                        false,
                        false,
                        { id: current_day.weekday, dayName: current_day.weekdayLong }
                    ));
                }
                fillWeek = fillWeek.reverse();
                cal = fillWeek.concat(cal);
                ***********************/

                let weeks = [];
                let week = [];

                for (let i = 0; i < cal.length; i++) {
                    week.push(cal[i]);
                    if (cal[i].getWeekday().id == 7) {
                        weeks.push(week);
                        week = []
                    }
                }
                weeks.push(week);
                week = [];
                console.log(weeks)
                return weeks;
            }
        }
    }
</script>
  
