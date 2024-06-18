<template>
    <div class="w-full h-full bg-[#086740] text-[#f9f9f9] rounded flex flex-col">
        <div class="w-full h-[15%] flex flex-row justify-center items-center">
            <div class="w-[14.28%] h-full flex flex-row justify-center items-center" v-for="day in weekdays" :key="day.code">
                {{ day.shortCode }}
            </div>
        </div>
        <div class="w-full h-[75%] flex flex-col justify-center items-center " v-if="monthCalendar">
            <div class="w-full h-full flex flex-row justify-stretch items-stretch" v-for="(week, index) in weeks_list" :key="index"> 
                <div class="w-[14.28%] h-full " v-for="i in 7" :key="i">
                    <DayController :parentData="calendarDay(i, week)" />
                </div>
            </div>
        </div>
        <div class="w-[100%] h-[95%] flex flex-row justify-center items-center" v-else >
            <ProgressSpinner  />
        </div>

    </div>
</template>

<script>
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
                calendar: null,
                weeks: null,
                weeks_list: null
            }
        },
        methods: {
            calendarDay(weekday, week) {
                let day = week.find(day => day.getWeekday().id == weekday);
                if (day) {
                    return {
                        "render": true,
                        "day": day,
                    };
                }
                else {
                    return {
                        "render": false,
                        "day": null,
                    };
                }
            }
        },
        mounted() {
            let cal = []
                cal = this.monthCalendar;
                console.log(cal)
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
                this.weeks = weeks.length;
                this.weeks_list = weeks;
        }
    }

</script>
  
