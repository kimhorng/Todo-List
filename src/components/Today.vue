<template>
  <v-card height="100%">
    <h1 class="ml-2 pa-4">Today</h1>
      <Tasks v-bind:tasks="tasks" />
      <AddTaskToday v-on:add-task="addTask"/>
  </v-card>
</template>

<script>
import AddTaskToday from '../layout/AddTaskToday';
import Tasks from '../layout/Tasks';

export default {
  name: 'Today',
  components: {
    Tasks,
    AddTaskToday
  },
  data :()=>({
      tasks : [
      ],
  }),
  methods :{
    deleteTask (id) {
      this.tasks = this.tasks.filter(task => task.id !== id);

    },
    addTask(newTask){
      this.tasks = [...this.tasks,newTask];
    }
  },
}
</script>