<template>
  <nav class="navbar">
    <div class="nav-wrapper">
      <ul id="nav-mobile" class="right hide-on-med-and-down">
        <li><a href="/#/" class="waves-effect waves-light"><i class="material-icons">home</i></a></li>
        <li><a href="/#/zstyle" class="waves-effect waves-light">Z-StyleZ</a></li>
        <li><a href="/#/demo" class="waves-effect waves-light">Demos</a></li>
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
  background-color: rgba($bg2R, $bg2G, $bg2B, 0.6);
  font-family: Eczar;
}

</style>
