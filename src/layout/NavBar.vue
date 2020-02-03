<template>
      <v-card dark>
          <v-toolbar>
                <v-btn icon @click="drawer=!drawer" >
                <v-icon>menu</v-icon>
            </v-btn>
            <v-toolbar-title>TODOIST</v-toolbar-title>
            <v-spacer v-for="n in 8" :key="n"></v-spacer>
            <v-btn icon>
                <v-icon >notifications_none</v-icon>
            </v-btn>
            <v-dialog
                v-model="dialog"
                width="400"
                class="dialog"
            >
            <template v-slot:activator="{ on }">
                <v-btn
                    v-on="on"
                    text>
                    <v-icon >mdi-account-circle-outline</v-icon>
                </v-btn>
            </template>
                <Login/>
                    <v-btn  color="black grey--text" @click="dialog = false">
                        <v-icon>mdi-arrow-left</v-icon>
                    </v-btn>
            </v-dialog>
        </v-toolbar>
         <v-navigation-drawer
            v-model="drawer"
            permanent
            app
            :mini-variant.sync="mini">
            <v-list-item class="px-2">
            <v-list-item-title><v-icon class="mr-5 ml-3">mdi-note</v-icon>    Task</v-list-item-title>

            <v-btn
              icon
              @click.stop="mini = !mini"
            >
              <v-icon>mdi-chevron-left</v-icon>
            </v-btn>
        </v-list-item>
        <hr>
           <NavDrawer/>
    </v-navigation-drawer>
      </v-card>
</template>

<script>
import Login from '../components/Login';
import NavDrawer from '../pages/NavDrawer';
export default {
    name : 'NavBar',
    components : {
        NavDrawer,
        Login,
    },
    data (){
        return{
            drawer : false,
            dialog: false,
            mini : true
        }
    }
}
</script>

<style>
</style>