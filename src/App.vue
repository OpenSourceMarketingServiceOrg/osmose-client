<template>
  <div id="app">
    <sidenav></sidenav>

    <header>
      <navbar></navbar>
    </header>
    
    <main>
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

<style lang="scss">
$bg2R: 22;
$bg2G: 27;
$bg2B: 51;
//non-paragraph r g and bs
$hr: 241;
$hg: 218;
$hb: 196;
//paragraph r g and b
$bodR: 166;
$bodG: 156;
$bodB: 172;
  #app {
    font-family: Work Sans;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    color: rgb($bodR, $bodG, $bodB);
    margin-top: 0px;
  }
</style>
