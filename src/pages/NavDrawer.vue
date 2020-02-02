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
            <v-list-item>
                <v-list-item-action >
                    <v-icon>mdi-chevron-right</v-icon>
                </v-list-item-action>
                <v-list-item-content>
                    <v-list-item-title>Projects</v-list-item-title>
                </v-list-item-content>
           </v-list-item>
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
        }
    },
  
}
</script>
