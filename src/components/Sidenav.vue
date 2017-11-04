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
    border-bottom: 1px solid #ddd;
  }

  .side-nav {
    background: #fff;
    -webkit-box-shadow: 0 2px 2px 0 rgba(0,0,0,0.14), 0 1px 5px 0 rgba(0,0,0,0.12), 0 3px 1px -2px rgba(0,0,0,0.2);
    box-shadow: 0 2px 2px 0 rgba(0,0,0,0.14), 0 1px 5px 0 rgba(0,0,0,0.12), 0 3px 1px -2px rgba(0,0,0,0.2);
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
