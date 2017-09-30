<template>
<v-app>
  <sidenav></sidenav>
  <navbar></navbar>
  <main>
    <v-container fluid>
      <router-view></router-view>
    </v-container>
  </main>
  <v-footer></v-footer>
</v-app>
</template>


<script>
import navbar from '@/components/Navbar';
import sidenav from '@/components/Sidenav';

  export default {
    name: 'email-made-easy',
    components: {
      navbar,
      sidenav,
    },
    mounted() {
      // If the user is authenticated,
      // fetch the data from the API
      if (this.$store.state.auth.authenticated) {
        this.$store.dispatch('account/find');
      }
    },
  };
</script>

<style lang="scss">
@import url(https://fonts.googleapis.com/css?family=Open+Sans:300,400,600,900|Roboto:300,400,500,700,900|Fredoka+One:300,400,500,700,900|Material+Icons);
</style>
