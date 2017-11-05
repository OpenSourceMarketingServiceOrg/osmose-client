<template>
  <nav class="navbar">
    <div class="nav-wrapper">
      <ul id="nav-mobile" class="right hide-on-med-and-down">
        <li v-bind:class="{ active: $route.name === 'Home' }"><a href="/#/" class="waves-effect waves-light"><i class="material-icons">home</i></a></li>
        <li v-bind:class="{ active: $route.name === 'Email'}"><a href="/#/email" class="wave-efect waves-light">Email</a></li>
        <li v-bind:class="{ active: $route.name === 'Demo' }"><a href="/#/demo" class="waves-effect waves-light">Demo</a></li>
      </ul>
    </div>
  </nav>
</template>

<script>
export default {
  name: 'navbar',
  data () {
    return {
      msg: 'Welcome to Your Vue.js App'
    };
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss" scoped>
@import "../assets/style/settings.scss";
nav {
  background-color: rgba($hr, $hg, $hb, 0.8);
  font-family: $h-font;
}

</style>
