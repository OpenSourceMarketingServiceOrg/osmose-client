<template>
  <nav class="navbar teal lighten-2">
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

</style>
