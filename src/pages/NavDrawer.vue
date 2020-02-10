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
                <v-btn icon v-on:click="addPro">
                  <v-icon >add</v-icon>
                </v-btn>
           </v-list-item>
           <v-btn text flat to='/project' class="ml-12">{{project}}</v-btn>
           <div v-if="!seen">
             <v-text-field
                v-model="project"
                label="Add project"
                single-line
                outlined
            ></v-text-field>
           </div>
      </v-list>
</template>
<script>
export default {
    name: 'Navbar',
    data(){
        return{
            seen: true,
            items: [
                { title: 'Inbox', icon: 'mdi-inbox-outline', route: '/inbox'},
                { title: 'Today', icon: 'mdi-calendar', route: '/today'},
                { title: 'Next 7 days', icon: 'mdi-calendar-month-outline', route: '/next7days'},
            ],
        }
    },
    methods:{
      addPro(){
        this.seen = this.seen == false;
      }
    }
  
}
</script>
