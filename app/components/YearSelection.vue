<template>
    <div class="h-full">
        <label for="year"
        class="text-[#f9f9f9] text-sm">
            Select a year
        </label>
        <InputNumber id="year"
        v-model="year" 
        inputId="withoutgrouping" 
        :useGrouping="false"
        class="w-full text-[#000000]" 
        @update:modelValue="yearEmmit()" />
    </div>
</template>
  
<script>

export default {
    emits: ['setYear'],
    props: ['defaultYear'],
    data() {
        return {
            year: null
        }
    },
    methods: {
        yearEmmit() {
            this.$emit('setYear', this.year)
        }
    },
    mounted(){
        this.year = this.defaultYear
    }
}
</script>

<style>
#year input {
    padding: 0.5rem;
    width: 50%;
}
</style>