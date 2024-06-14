<template>
    <div class="w-[80%] h-[80%] bg-[#13271b] text-[#f9f9f9] rounded p-4 flex flex-col">
        <div class="w-full h-[20%] flex flex-row justify-center">
            <MonthSelection 
            class="w-[50%] h-full m-3"
            @setMonth="setMonth" 
            :defaultMonth="calendar.getCurrentCalendar().month" />
            <YearSelection 
            class="w-[50%] h-full m-3"
            @setYear="setYear" 
            :defaultYear="calendar.getCurrentCalendar().year"/> 
        </div>
        <div class="w-full h-[70%] flex flex-row justify-center">
            <CalendarTable :monthCalendar="currentCalendar" v-if="currentCalendar"/>
        </div>
    </div>
</template>

<script>
    import Calendar from '../src/object_logic/calendar.ts'
    import Day from '../src/object_logic/day.ts'
    export default {
        data () {
            return {
                calendar: new Calendar(),
                currentCalendar: null
            }
        },
        methods: {
            setMonth(val) {
                this.currentCalendar = null
                this.calendar.setCurrentCalendar({
                    month: parseInt(val.code), 
                    year: this.calendar.getCurrentCalendar().year
                })
                this.currentCalendar = this.calendar.getCurrentMonthCalendar()
            },
            setYear(val) {
                this.currentCalendar = null
                this.calendar.setCurrentCalendar({
                    month: this.calendar.getCurrentCalendar().month,
                    year: val
                })
                this.currentCalendar = this.calendar.getCurrentMonthCalendar()
            }
        },
        mounted() {
            this.currentCalendar = this.calendar.getCurrentMonthCalendar()
        }
    }
</script>
  
