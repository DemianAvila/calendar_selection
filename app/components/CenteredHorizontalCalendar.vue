<template>
    <div class="w-[80%] h-[80%] bg-[#13271b] text-[#f9f9f9] rounded p-4 flex flex-col  items-center">
        <div class="w-full h-[20%] flex flex-row justify-around">
            <MonthSelection 
            class="w-[30%] h-full"
            @setMonth="setCalendar($event, null)" 
            :defaultMonth="calendar.getCurrentCalendar().month" />
            <YearSelection 
            class="w-[30%] h-full"
            @setYear="setCalendar(null ,$event)" 
            :defaultYear="calendar.getCurrentCalendar().year"/> 
        </div>
        <div class="w-[90%] h-[65%] flex flex-col justify-center">
            <TabMenu :model="[ { label: 'Dashboard', icon: 'pi pi-home' }]" />
            <CalendarTable :monthCalendar="currentCalendar" v-if="currentCalendar"/>
            <ProgressSpinner v-else  />
        </div>
        <div class="w-[90%] h-[15%] flex flex-row justify-center">
            <DateStringPricker/>
        </div>
    </div>
</template>

<script>
    import Calendar from '../src/object_logic/calendar.ts'
    export default {
        data () {
            return {
                calendar: new Calendar(),
                currentCalendar: null
            }
        },
        methods: {
            async setCalendar(month = null, year = null){
                this.currentCalendar = null
                await new Promise(resolve => setTimeout(resolve, 100));
                this.calendar.setCurrentCalendar({
                    month: month ? parseInt(month.code) : this.calendar.getCurrentCalendar().month,
                    year: year ? parseInt(year) : this.calendar.getCurrentCalendar().year
                })
                this.currentCalendar = this.calendar.getCurrentMonthCalendar()
            }
        },
        mounted() {
            this.currentCalendar = this.calendar.getCurrentMonthCalendar()
        }
    }
</script>
  
