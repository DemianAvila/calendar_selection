<template>
    <div class="w-full h-full rounded">
        <button
        class="w-full h-full rounded bg-[#13271b]"
        :class="dayStyle()"
        @click="day.selected = !day.selected">
            {{ day.day.day }}
        </button>
    </div>
</template>

<script>
    export default {
        props: ["day"],
        methods: {
            dayStyle() {
                if (this.day.selected) {
                    return "selected"
                } else {
                    return "not_selected"
                }
            }
        }
    }
</script>

<style>
    .in_month {
        color: #f9f9f9;
        background-color: #13271b;
    }

    .not_in_month {
        color: #234030;
        background-color: #13271b;
    }

    .selected {
        background-color: #3ea078;
        color: #13271b;
    }   

    .not_selected {
        background-color: #13271b;
        color: #234030;
    }   
</style>