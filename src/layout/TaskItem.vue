<template>
    <v-layout justify-center="">
        <v-card class="task-item pb-2 mb-5" dark="" width="90%" v-if="!deleted">
            <v-layout justify-space-between="">
                <p class="ml-4">
            <v-checkbox
              v-model="ex4"
              label="Task :"
              color="success"
              value="success"
              hide-details
               v-on:change="markComplete"  v-show="completed"
            ></v-checkbox>
            <span  v-show="completed" class="ml-12"><h2>{{task.title}}</h2></span>
            <span v-show="completed"><sub>  ({{task.date}})</sub></span>
            
        </p>
            <v-btn text class="mt-4 mr-4 " @click=" deleted = ! deleted" v-show="completed">
                <v-icon flat>mdi-delete-circle-outline</v-icon>
            </v-btn>
            </v-layout>
    
        <v-layout justify-space-between=""> 
            <h4 v-if="check" class="ml-4 my-2" >
                <v-icon class="mr-2"> mdi-checkbox-marked</v-icon>Complete! 
            </h4>
            
            <v-card-actions class="pb-2">
                <v-btn text @click=" deleted = ! deleted" v-if="check" class="mb-2">
                <v-icon flat>mdi-delete-circle-outline</v-icon>
                </v-btn>
                <v-btn v-if="check" text class="mr-4 mb-2" color="white black--text">undo</v-btn>
            </v-card-actions>
        </v-layout>
    </v-card>
    </v-layout>
</template>

<script>
export default {
    name : "TaskItem",
    props: ["task"],
    methods :{
        markComplete() {
            this.task = !this.task;
            this.date = !this.date;
            this.completed = this.completed == false;
            this.check = !this.check;
        },
    },
    data:() =>({
        check: false,
        deleted : false,
        undo : false,
        completed: 'setDisable',
    })
}
</script>
