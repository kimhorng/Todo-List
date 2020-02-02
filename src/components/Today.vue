<template>
    <v-form >
    <v-container>
        <h1>Today</h1>
        <v-btn v-if="seen1" text v-on:click='showAddTask'>
            <v-icon left>add_circle_outline</v-icon>
            <span>Add Task</span>
          </v-btn>
        <div v-if="seen">
            <v-row >
            <v-col cols="8" >
                <v-text-field
                    label="E.g. Have a meeting #5:00pm"
                    single-line
                    outlined
                ></v-text-field>
            </v-col>
            <v-col cols="4">
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
                        <v-date-picker v-model="date">
                        <v-spacer></v-spacer>
                        <v-btn flat color="primary" @click="menu = false">Cancel</v-btn>
                        <v-btn flat color="primary" @click="$refs.menu.save(date)">OK</v-btn>
                        </v-date-picker>
                    </v-menu>
                </v-flex>
            </v-col>
          </v-row>
          <v-btn color="primary">Add Task</v-btn>
          <v-btn text v-if="seen" v-on:click='showAddTask'>cancle</v-btn>
        </div>
    </v-container>
  </v-form>
</template>
<script>
  export default {
    data: () => ({
      date: new Date().toISOString().substr(0, 10),
      menu: false,
      seen: false,
      seen1 : true,
    }),
    methods: {
      showAddTask : function (){
        this.seen = this.seen == true? false : true;
        this.seen1 = this.seen1 == true? false : true;
    }
  }
  }
</script>