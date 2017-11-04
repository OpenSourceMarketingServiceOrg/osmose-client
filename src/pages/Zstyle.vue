<template>
  <div class="zstyles">
    <h1>Z Styles!</h1>
    <h3>Please let me know if your adding any styles that will need to be global!</h3>
    <h5>Anything you push up in here is safe</h5>
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
      background-color: #161b33;
      color: #a69cac;
      font-family: 'Work Sans';
      h1 {
        font-family: Eczar;
        color: rgba($hr, $hg, $hb, 1);
      }
      
    }
</style>
