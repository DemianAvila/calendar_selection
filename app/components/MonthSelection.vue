<template>
    <div class="h-full">
        <label for="month"
        class="text-[#f9f9f9] text-sm">
            Select a month
        </label>
        <Dropdown id="month"
        v-model="selectedMonth" 
        :options="months" 
        optionLabel="name"
        placeholder="Select a Month" 
        class="w-full" 
        @change="monthEmmit()" />
    </div>
</template>
  
<script>

export default {
    emits: ['setMonth'],
    props: ['defaultMonth'],
    data() {
        return {
            months: [
                { name: 'January', code: '1' },
                { name: 'February', code: '2' },
                { name: 'March', code: '3' },
                { name: 'April', code: '4' },
                { name: 'May', code: '5' },
                { name: 'June', code: '6' },
                { name: 'July', code: '7' },
                { name: 'August', code: '8' },
                { name: 'September', code: '9' },
                { name: 'October', code: '10' },
                { name: 'November', code: '11' },
                { name: 'December', code: '12' }
            ], 
            selectedMonth: null
        }
    },
    methods: {
        monthEmmit() {
            this.$emit('setMonth', this.selectedMonth)
        }
    },
    mounted(){
        this.selectedMonth = this.months.find(x => x.code == this.defaultMonth)
    }
}

</script>
