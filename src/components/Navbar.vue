<template>
   <v-toolbar class=" darken-3 white--text" >
        <!-- <router-link class="navbar-brand white--text branding"  :to="{ name: 'home.index' }">
            {{title}}
            <v-icon style="color:white; font-size: 1.2em;color:#b3d4fc;margin-bottom:5px;">email</v-icon>
        </router-link> -->

        <v-spacer></v-spacer>

        <v-btn v-for="item in items" :key="item.title" :to="{ name: item.name }" class="white--text" style="background: transparent;">
            <v-icon style="padding-right:5px;">{{ item.icon }}</v-icon>
            {{ item.title }}
        </v-btn>
        <v-menu
            origin="center center"
            transition="scale-transition"
            bottom>
            <v-btn icon slot="activator">
            <v-icon>menu</v-icon>
            </v-btn>
        <v-list>
            <v-list-tile v-for="item in items" :key="item.title" :to="{ name: item.name }">
            <v-list-tile-title>{{ item.title }}</v-list-tile-title>
            </v-list-tile>
        </v-list>
        </v-menu>
    </v-toolbar>
</template>

<script>

  import SlotMixin from '@/mixins/slot';

  export default {
    name: 'navbar',
    mixins: [
      SlotMixin,
    ],
    data() {
      return {
        menuCollapsed: false,
        clipped: false,
        fixed: false,
        miniVariant: false,
        title: 'Osmose',
        items: [
            { title: '', icon: 'home', name: 'home.index' },
            { title: 'Admin', icon: 'account_circle', name: 'account.index',
                subitems: [
                    { title: '', icon: 'face', name: 'home.index' },
                    { title: 'Admin', icon: 'account circle', name: 'account.index' },
                ] 
            },
            { title: 'Email', icon: 'email', name: 'email.index' },
            { title: 'Docs', icon: 'code', name: 'docs.index' }
        ]
      };
    },
    methods: {
      logout() {
        this.$store.dispatch('auth/logout');
      },
      toggleMenu() {
        this.menuCollapsed = !this.menuCollapsed;
      },
    },
  };
</script>

<style lang="scss" scoped>

.branding {
  font-family: Roboto;
  font-size:30px;
}

nav.toolbar {
    // background: #4393B9;
    background: #0067A8;
}

</style>



        <!-- <v-list-tile v-for="item in items" :key="item.title" @click="">
          <v-list-tile-action>
            <v-icon>{{ item.icon }}</v-icon>
          </v-list-tile-action>
          <v-list-tile-content>
            <v-list-tile-title>{{ item.title }}</v-list-tile-title>
          </v-list-tile-content>
        </v-list-tile> -->
      <!-- </v-list> -->
        <!-- <router-link :to="{ name: 'home.index' }" active-class="active" class="nav-item" tag="li">
            <a class="nav-link">Home</a>
          </router-link> -->
      <!-- <v-toolbar-side-icon @click.stop="drawer = !drawer" light></v-toolbar-side-icon>
      <v-btn icon light @click.stop="miniVariant = !miniVariant"> -->
        <!-- <v-icon v-html="miniVariant ? 'chevron_right' : 'chevron_left'"></v-icon> -->
      <!-- </v-btn> -->
      <!-- <v-btn icon light @click.stop="clipped = !clipped" >
        <v-icon>web</v-icon>
      </v-btn> -->
      <!-- <v-btn icon light @click.stop="fixed = !fixed">
        <v-icon>remove</v-icon>
      </v-btn> -->
      
      <!-- <v-spacer></v-spacer> -->
      <!-- <v-btn icon light @click.stop="rightDrawer = !rightDrawer">
        <v-icon>menu</v-icon>
      </v-btn> -->