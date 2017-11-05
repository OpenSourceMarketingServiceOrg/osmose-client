<template>
  <div class="zstyles">
    <h1 class="h-serif">Z Styles!</h1>
    <h3 class="h-serif">Please let me know if your adding any styles that will need to be global!</h3>
    <p class="p-sans">Anything you push up in here is safe</p>
  </div>
</template>

<script>
export default {
  name: 'Zstyle',
  data () {
    return {
      msg: ''
    };
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss" scoped>
@import "../assets/style/settings.scss";

    .zstyles {
      // background-color: rgba($bg2R, $bg2G, $bg2B, 1);
      color: #a69cac;
      font-family: $p-font;

      
    }
</style>
