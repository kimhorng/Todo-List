<template>
    <v-form >
    <v-container>
          <h1>Inbox</h1>
          
          <p>{{task}}  {{date}} </p>
          <v-btn v-if="seen1" text v-on:click='showAddTask'>
            <v-icon left>add_circle_outline</v-icon>
            <span>Add Task</span>
          </v-btn>
          <div v-if="seen">
              <v-row >
                <v-col cols="12" lg="8" sm="6">
                    <v-text-field
                        v-on:keyup.enter="EnterTask"
                        v-model="task_name"
                        label="E.g. Have a meeting #5:00pm"
                        single-line
                        outlined
                    ></v-text-field>
                </v-col>
                <v-col cols="12" lg="4" sm="6">
                    <v-text-field 
                        v-on:keyup.enter="EnterTask"
                        v-model="task_date"
                        label="Schedule"
                        outlined
                        type ="date"
                        >
              </v-text-field>
                </v-col>
              </v-row>
              <v-btn v-on:click="EnterTask" color="primary">Add Task</v-btn>
              <v-btn text v-if="seen" v-on:click.prevent='showAddTask'>cancle</v-btn>
          </div>
          
    </v-container>
  </v-form>
</template>
<script>
export default {
  data: () =>({
    seen: false,
    seen1 : true,
    enter : false,
    task_name: "",
    task : "",
    task_date:"",
    date:""
    
  }),
  methods: {
    showAddTask : function (){
      this.seen = this.seen == true? false : true;
      this.seen1 = this.seen1 == true? false : true;
      
    },
    EnterTask : function(){
      this.task = this.task_name.replace(/^/,'');
      this.date = this.task_date.replace(/^/,'');  
    }
  }
}
</script>