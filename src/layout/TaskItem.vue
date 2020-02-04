<template>
    <v-layout justify-center="">
        <v-card class="task-item pb-2 mb-5" dark="" width="90%">
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
            <span  v-show="completed">{{task.title}}</span>
            <span v-show="completed"><sub>  ({{task.date}})</sub></span>
        </p>
            <v-btn text class="mt-12" v-show="complete">
                <v-icon flat>mdi-delete-circle-outline</v-icon>
            </v-btn>
            </v-layout>
    
        <h4 v-if="check" class="ml-4 my-2" >
            Complete!
        </h4>
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
        completed: 'setDisable',
    })
}
</script>
