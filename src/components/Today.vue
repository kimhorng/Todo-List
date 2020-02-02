<template>
  <div class="ml-4">
    <h1>Today</h1>
      <Tasks v-bind:tasks="tasks" />
      <AddTaskToday v-on:add-task="addTask"/>
  </div>
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