<template>
    <v-layout justify-center="">
        <v-card class="mb-lg-6 ml-lg-6 py-2 ml-2 mb-4 pt-8" width="75%">
        <div v-bind:key="task.id" v-for= " task in tasks">    
            <TaskItem v-bind:task="task"/>
        </div>
    </v-card>
    </v-layout>
</template>

<script>
import TaskItem from './TaskItem.vue';
export default {
    name: "Tasks",
    components :{
        TaskItem
    },
    props :["tasks"]
}
</script>

<style scoped>

</style>