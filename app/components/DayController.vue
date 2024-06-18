<template>
    <div class="w-full h-full p-1 rounded">
        <button v-if="render"
        class="w-full h-full rounded"
        :class="dayStyle()"
        @click="day.selected = !day.selected">
            {{getDayNumber()}}
        </button>
    </div>
</template>

<script>
    export default {
        props: ["parentData"],
        data() {
            return {
                day: this.parentData.render ? this.parentData.day : null,
                render: this.parentData.render, 
                height: this.parentData.height
            }
        },
        methods: {
            dayStyle() {
                if (this.day.selected) {
                    return "selected"
                } else {
                    return "not_selected"
                }
            },
            getDayNumber(){
                if (this.day) {
                    return this.day.day.day
                }
                else {
                    return ""
                }
            }

        }
    }
</script>

<style>
    .selected {
        background-color: #3ea078;
        color: #13271b;
    }   

    .not_selected {
        background-color: #13271b;
        color: #f9f9f9;
    }   
</style>