<template>
<v-card class="ml-lg-6 ml-2 pa-6" width="95%">
         <form @submit="addTask" >
            <v-btn v-if="seen1" text v-on:click='showAddTask'>
                <v-icon left>add_circle_outline</v-icon>
                <span>Add Task</span>
            </v-btn>
           <div v-if="seen">
              <v-row >
                <v-col cols="12" lg="8" sm="6">
                    <v-text-field
                        v-model="title"
                        label="E.g. Have a meeting #5:00pm"
                        single-line
                        outlined
                    ></v-text-field>
                </v-col>

                <v-col cols="12" lg="4" sm="6">
                    <v-text-field 
                        v-model="date"
                        label="Schedule"
                        outlined
                        type ="date"
                        />
        
                    </v-col>
                </v-row>
                <v-layout justify-end="">
                    <v-btn type="submit" color="primary">Add Task</v-btn>
                <v-btn text v-if="seen" v-on:click.prevent='showAddTask' class="grey darken-3 ml-2" color="white">cancel</v-btn>
                </v-layout>
            </div>
        </form>
    </v-card>
</template>
<script>
export default {
    name : "AddTask",
    data: () =>({
            seen: false,
            seen1 : true,
            title:"",
            date:""
            
    }),
    methods : {
        addTask(e){
            e.preventDefault();
            const newTask ={
                title : this.title,
                date: this.date

            }
            // send up to parent 
            this.$emit('add-task',newTask);
            this.title ='';
            this.date="";
        },
        showAddTask : function (){
            this.seen = this.seen == true? false : true;
            this.seen1 = this.seen1 == true? false : true;
            
        },
    }
}
</script>