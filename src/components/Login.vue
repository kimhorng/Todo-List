<template>
    <v-layout justify-center>
        <v-card width="400px" height="420px" dark>
            <v-alert
                    outlined
                    border="bottom"
                    colored-border
                    color="black accent-4"
                    elevation="2" height="425px">
                    <v-layout justify-center>
                <v-card-title class="mr-2"><h3>Login</h3></v-card-title>
            </v-layout>
            <v-text-field
                         label="Username: "
                         outlined=""
                         class="mx-5 mt-6" prepend-icon="mdi-account"
                         id="username"/>
            <v-text-field
                         label="Password: "
                         :type="showPassword?'text':'password'"
                         outlined=""
                         class="mx-5"
                         :append-icon="showPassword? 'mdi-eye':'mdi-eye-off'"
                         prepend-icon="mdi-lock"
                         id="password"
                         @click:append="showPassword =! showPassword"/>
            <v-divider></v-divider>
            <v-layout class="mt-6" justify-space-around="">
                <v-btn class="success" v-on="off">Sign in</v-btn>
                <v-dialog
                         v-model="dialog"
                         width="400px"
                         persistent>
                         <template v-slot:activator="{on}">
                            <v-btn 
                            class="info"
                            v-on="on"
                            text>Sign up</v-btn>
                         </template>
                         <SignUp/>
                         <v-btn  color="black grey--text" @click="dialog = false">
                            <v-icon>mdi-arrow-left</v-icon>
                        </v-btn>
                         </v-dialog>
            </v-layout>
            </v-alert>
    </v-card>
    </v-layout>
</template>

<script>
import SignUp from "../components/SignUp";
export default {
name:"Login",
components:{
    SignUp,
},
data : () => ({
    dialog: false,
    showPassword: false,
})
}
</script>

<style>
</style>