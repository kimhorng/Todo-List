<template>
  <div height="100%">
    <h1 class="ml-2 pa-4">Inbox</h1>
      <Tasks v-bind:tasks="tasks"/>
      <AddTask v-on:add-task="addTask"/>
  </div>
</template>

<script>
import AddTask from '../layout/AddTask';
import Tasks from '../layout/Tasks';

export default {
  name: 'inbox',
  components: {
    Tasks,
    AddTask,
  },
  data(){
    return {
      tasks : [
      ]
    }
  },
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