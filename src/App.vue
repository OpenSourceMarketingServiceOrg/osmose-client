<template>
  <div id="app">
    <sidenav></sidenav>

    <header>
      <navbar></navbar>
    </header>

    <main class="container-fluid">
      <router-view/>
    </main>
  </div>
</template>

<script>
  import navbar from '@/components/Navbar';
  import sidenav from '@/components/Sidenav';
  
  export default {
    name: 'app',
    components: {
      navbar,
      sidenav
    }
  };
</script>

<style lang="scss" scoped>
  @import './assets/style/index';
  
  #app {
    font-family: Work Sans;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    color: rgb($bodR, $bodG, $bodB);
    margin-top: 0px;
  }

  main {
    padding-top: 5px;
  }
</style>
