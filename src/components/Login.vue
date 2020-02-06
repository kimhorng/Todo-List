<template>
  <v-layout justify-center>
    <v-card width="700px" height="500px" class="mx-auto loginCard" flat>
      <v-tabs v-model="tab" centered class="pt-6">
        <v-tab>
          Login
        </v-tab>
        <v-tab>
          Register
        </v-tab>
      </v-tabs>

      <!-- Login Form -->
      <v-tabs-items v-model="tab" class="mt-5">
        <v-tab-item>
          <v-layout justify-center>
            <v-card flat width="60%">
              <v-text-field
                label="Username: "
                class="mx-5 mt-6"
                prepend-icon="mdi-account"
                id="username"
              />
              <v-text-field
                label="Password: "
                :type="showPassword ? 'text' : 'password'"
                class="mx-5"
                :append-icon="showPassword ? 'mdi-eye' : 'mdi-eye-off'"
                prepend-icon="mdi-lock"
                id="password"
                @click:append="showPassword = !showPassword"
              />
              <v-checkbox label="Remember me!" class="ml-12" />
              <v-btn class="info ml-12 mt-3" width="80%">Login</v-btn>
            </v-card>
          </v-layout>
        </v-tab-item>

        <!-- Register Form -->
        <v-tab-item>
          <v-layout justify-center>
            <v-card flat width="60%">
              <v-text-field
                label="Username: "
                class="mx-5"
                prepend-icon="mdi-account"
                id="username"
              />
              <v-text-field
                label="Email:  "
                class="mx-5"
                prepend-icon="mdi-email"
                id="email"
              />
              <v-text-field
                label="Password: "
                :type="showPassword ? 'text' : 'password'"
                class="mx-5"
                :append-icon="showPassword ? 'mdi-eye' : 'mdi-eye-off'"
                prepend-icon="mdi-lock"
                id="password"
                @click:append="showPassword = !showPassword"
              />
              <v-text-field
                label="Confirm Password: "
                :type="showPassword ? 'text' : 'password'"
                class="mx-5"
                :append-icon="showPassword ? 'mdi-eye' : 'mdi-eye-off'"
                prepend-icon="mdi-"
                id="cofirmPassword"
                @click:append="showPassword = !showPassword"
              />
              <v-checkbox
                label="I aggred with the Terms and Conditions!"
                class="ml-12"
              />
              <v-btn class="info ml-12" width="80%" text>Register</v-btn>
            </v-card>
          </v-layout>
        </v-tab-item>
      </v-tabs-items>
    </v-card>
  </v-layout>
</template>

<script>
// import SignUp from "../components/SignUp";
export default {
  name: "Login",
  components: {
    // SignUp
  },
  data: () => ({
    dialog: false,
    showPassword: false,
    tab: null
  })
};
</script>

<style></style>
