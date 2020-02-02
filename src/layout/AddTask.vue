<template>
    <div>
        <form @submit="addTask" >
            <input type="text" v-model="task_name" name="task_name" placeholder="Add todo...">
            <input type="submit" value="Submit" class="btn">
        </form>
    </div>
</template>
<script>
// npm i uuid to install uuid package to use
import uuid from 'uuid';
export default {
    name : "AddTask",
    data()  {
        return {
            task_name : ''
        }
    },
    methods : {
        addTask(e){
            e.preventDefault();
            const newTask ={
                id : uuid.v4(),
                task_name : this.task_name,
            }
            // send up to parent 
            this.$emit('add-task',newTask);
            this.task_name ='';
        }
    }
}
</script>
