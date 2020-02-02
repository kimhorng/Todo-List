<template>
    <div class="task-item">
        <p class="ml-4">
            <input type="checkbox" v-on:change="markComplete"  v-show="completed">
            <span  v-show="completed">{{task.title}}</span>
            <span v-show="completed"><sub>  ({{task.date}})</sub></span>
        </p>
    </div>
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
        },
    },
    data:() =>({
        completed: 'setDisable',
    })
}
</script>
