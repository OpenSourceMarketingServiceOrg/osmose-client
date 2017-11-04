<template>
    <ul id="slide-out" class="side-nav fixed">
      <li class="logo">
        <a id="logo-container" href="/" >
          <img class="responsive-img brand-logo" src="../assets/logo.png" />
        </a>
      </li>
      <li><a href="#!">First Sidebar Link</a></li>
      <li><a href="#!">Second Sidebar Link</a></li>
    </ul>
</template>

<script>
export default {
  name: 'sidenav',
  data () {
    return {
      msg: 'Welcome to Your Vue.js App'
    };
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss" scoped>

  #logo-container {
    height:100%;
    border-bottom: 1px solid #ccc;
  }

  .side-nav {
    background: #f5f5f5;
  }

  .brand-logo {
    max-height: 100px;
    vertical-align: middle;
  }

  header, main, footer {
      padding-left: 300px;
    }

    @media only screen and (max-width : 992px) {
      header, main, footer {
        padding-left: 0;
      }
    }
</style>
