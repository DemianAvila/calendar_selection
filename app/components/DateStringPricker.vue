<template>
    <div class="w-full h-full">
        <div class="h-full">
            <label for="date"
            class="text-[#f9f9f9] text-sm">
                Select a year
            </label>
            <InputText id="date"
            v-model="date"
            type="text" 
            class="w-full text-[#000000]"
            @update:modelValue="dateCorrectEmmit()"
            @click="emptyPlaceholder()" />
        </div>
    </div>
</template>

<script>
export default {
    data() {
        return {
            date: "dd/mm/yyyy"
        }
    },
    methods: {
        emptyPlaceholder() {
            if (this.date == "dd/mm/yyyy") {
                this.date = ""
            }
        },
        dateCorrectEmmit() {
            console.log("changes")
            let tmpDate = this.date
            tmpDate = tmpDate.replace(/\//g, '');
            if (tmpDate.length == 2) {
                try {
                    let day = parseInt(tmpDate[0]+tmpDate[1])
                    if (!(day >=1 && day <= 31)) {
                        this.date = ""
                    } else {
                        this.date = day.toString()+"/"
                    }
                } catch (error) {
                    this.date = "dd/mm/yyyy"
                }
            }else if (tmpDate.length == 4) {
                try {
                    let month = parseInt(tmpDate[2]+tmpDate[3])
                    if (!(month >=1 && month <= 12)) {
                        this.date = this.date.slice(0, 3)
                    } else {
                        this.date = this.date.slice(0, 3) + month.toString()+"/"
                    }
                } catch (error) {
                    this.date = "dd/mm/yyyy"
                }
            }
        }  
            
    }
}
</script>