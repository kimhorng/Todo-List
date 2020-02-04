<template>
    <v-layout justify-center>
        <v-card width="400px" height="510px" dark>
            <v-alert
                    outlined
                    border="bottom"
                    colored-border
                    color="black accent-4"
                    elevation="2" height="520px">
                    <v-layout justify-center>
                <v-card-title class="mr-2"><h3>Login</h3></v-card-title>
            </v-layout>
            <v-text-field
                         label="Username: "
                         outlined=""
                         class="mx-5 mt-6" prepend-icon="mdi-account"
                         id="username"/>
             <v-text-field
                         label="Email: "
                         outlined=""
                         class="mx-5" prepend-icon="email"
                         id="email"/>
            <v-text-field
                         label="Password: "
                         :type="showPassword?'text':'password'"
                         outlined=""
                         class="mx-5"
                         :append-icon="showPassword? 'mdi-eye':'mdi-eye-off'"
                         prepend-icon="mdi-lock"
                         id="password"
                         @click:append="showPassword =! showPassword"/>
            <v-text-field
                         label="Confirm Password: "
                         :type="showPassword1?'text':'password'"
                         outlined=""
                         class="mx-5"
                         :append-icon="showPassword1? 'mdi-eye':'mdi-eye-off'"
                         prepend-icon="mdi-lock"
                         id="password"
                         @click:append="showPassword1 =! showPassword1"/>
            <v-divider></v-divider>
            <v-layout class="mt-4" justify-space-around="">
                <v-btn color="black white--text">Register</v-btn>
            </v-layout>
            </v-alert>
    </v-card>
    </v-layout>
</template>

<script>
export default {
name:"Login",
data: () => ({
    showPassword: false,
    showPassword1: false,
})
}
</script>

<style>
</style>