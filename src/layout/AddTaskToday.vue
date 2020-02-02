<template>
    <div class="ml-4">
        <form @submit="addTask" >
            <v-btn v-if="seen1" text v-on:click='showAddTask'>
                <v-icon left>add_circle_outline</v-icon>
                <span>Add Task</span>
            </v-btn>
            <div v-if="seen">
              <v-row >
                <v-col cols="12" lg="8" sm="6">
                    <v-text-field
                        v-on:keyup.enter="EnterTask"
                        v-model="title"
                        label="E.g. Have a meeting #5:00pm"
                        single-line
                        outlined
                    ></v-text-field>
                </v-col>
                <v-col cols="12" lg="4" sm="6">
                    <v-flex >
                    <v-menu
                        v-model="menu"
                        :close-on-content-click="false"
                        :return-value.sync="date"
                    >
                        <template v-slot:activator="{ on }">
                        <v-text-field
                            v-model="date"
                            label =" Schedule"
                            outlined
                            v-on="on"
                        ></v-text-field>
                        </template>
                    </v-menu>
                </v-flex>
                    </v-col>
                </v-row>
                <v-btn type="submit" color="primary">Add Task</v-btn>
                <v-btn text v-if="seen" v-on:click.prevent='showAddTask'>cancle</v-btn>
            </div>
        </form>
    </div>
</template>
<script>
export default {
    name : "AddTaskToday",
    data: () =>({
            seen: false,
            seen1 : true,
            title:"",
            date : new Date().toLocaleDateString(),
            
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
        },
        showAddTask : function (){
            this.seen = this.seen == true? false : true;
            this.seen1 = this.seen1 == true? false : true;
        },
    }
}
</script>
