<template>
  <v-app>
    <nav height="10%">
      <NavBar/>
    </nav>
    <v-content height="20%">
      <router-view></router-view>
    </v-content>
    <section height="60%"></section>
    <footer>
      <Footer/>
    </footer>
  </v-app>
</template>

<script>
import NavBar from './layout/NavBar';
import Footer from './layout/Footer';
export default {
  name: 'App',
  components: {
    NavBar,
    Footer,
  },
  data: () => ({
    //
  }),
};
</script>