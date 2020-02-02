<template>
    <v-list dense>
        <v-list-item
          v-for="item in items"
          :key="item.title" router :to="item.route"
        >
          <v-list-item-action>
            <v-icon>{{ item.icon }}</v-icon>
          </v-list-item-action>

          <v-list-item-content>
            <v-list-item-title>{{ item.title }}</v-list-item-title>
          </v-list-item-content>
        </v-list-item>
        <v-menu offset-y>
            <template v-slot:activator="{on}">
            <v-list-item
                 v-on ="on"
                 
            >
                <v-list-item-action >
                    <v-icon>mdi-chevron-right</v-icon>
                </v-list-item-action>
                <v-list-item-content>
                    <v-list-item-title>Projects</v-list-item-title>
                </v-list-item-content>
           </v-list-item>
        </template>
        <v-list dark color="#363636" class="ml-2">
        <v-list-item
          v-for="(item, index) in item"
          :key="index"
          click.stop=""
        >
          <v-list-item-action >
                <v-icon>{{item.icon}}</v-icon>
          </v-list-item-action>
          <v-list-item-title>{{ item.title }}</v-list-item-title>
        </v-list-item>
      </v-list>
        </v-menu>
      </v-list>
</template>
<script>
export default {
    name: 'Navbar',
    data(){
        return{
            items: [
          { title: 'Inbox', icon: 'mdi-inbox-outline', route: '/inbox'},
          { title: 'Today', icon: 'today', route: '/today'},
          { title: 'Next 7 days', icon: 'mdi-calendar-month-outline', route: '/next7days'},
        ],
        item: [
            {title: 'Add Task' , icon:'today'}
        ],
        }
    },
  
}
</script>
