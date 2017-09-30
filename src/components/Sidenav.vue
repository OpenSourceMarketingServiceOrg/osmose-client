<template>
    <v-navigation-drawer
        persistent
        :mini-variant="miniVariant"
        :clipped="clipped"
        v-model="drawer"
        enable-resize-watcher
        light
        class="pb-0">
        <v-card-title style="background: #0067A8;height: 64px;padding:6px 12px 12px 12px;">
          <!-- <div class="title-header"> -->
            <router-link class="navbar-brand white--text" style="font-family:Roboto;font-size:30px;float:none;margin:auto;" :to="{ name: 'home.index' }" >
            Osmose
            <v-icon style="color:white; font-size: 1.2em;color:#b3d4fc;margin-bottom:5px;">email</v-icon>
              <!-- <v-toolbar-title class="branding" v-text="title"></v-toolbar-title> -->
          </router-link>
          <!-- </div> -->
        </v-card-title>
        <v-card-title>
          <div class="title-header">
            <v-text-field
                name="input-2-3"
                label="Search Docs"
                class="input-group"
                prepend-icon="search"
                single-line
                hide-details
                v-model="search">
            </v-text-field>
          </div>
        </v-card-title>
        <v-list style="padding-top:0px;">
          <v-list-group v-for="item in items" :value="item.active" v-bind:key="item.title">
            <v-list-tile slot="item" @click="">
              <v-list-tile-action>
                <v-icon>{{ item.icon }}</v-icon>
              </v-list-tile-action>
              <v-list-tile-content>
                <v-list-tile-title>{{ item.title }}</v-list-tile-title>
              </v-list-tile-content>
              <v-list-tile-action>
                <v-icon v-if="item.items">keyboard_arrow_down</v-icon>
              </v-list-tile-action>
            </v-list-tile>
            <v-list-tile v-for="subItem in item.items" v-bind:key="subItem.title" @click="">
              <v-list-tile-content>
                <v-list-tile-title>{{ subItem.title }}</v-list-tile-title>
              </v-list-tile-content>
              <v-list-tile-action>
                <v-icon>{{ subItem.icon }}</v-icon>
              </v-list-tile-action>
            </v-list-tile>
          </v-list-group>
        </v-list>
    </v-navigation-drawer>
</template>


<script>

  import SlotMixin from '@/mixins/slot';

  export default {
    name: 'sidenav',
    mixins: [
      SlotMixin,
    ],
    props: {
      search: '',
    },
    data() {
      return {
        menuCollapsed: false,
        clipped: false,
        drawer: true,
        fixed: true,
        items: [
          { icon: 'note', title: 'Developer Notes' },
          { icon: 'star', title: 'Getting Started',
            items: [
              { icon: '', title: 'Initial Setup' },
              { icon: '', title: 'Service Configuration' },
              { icon: '', title: 'Sending Email ' }
            ] 
          },
          { icon: 'widgets', title: 'Components',
            items: [
              { icon: '', title: 'Manage Mailing List' },
              { icon: '', title: 'Template Editor' }
            ]  }
        ],
        enableResizeWatcher: true,
        miniVariant: false,
      };
    },
    methods: {
      logout() {
        this.$store.dispatch('auth/logout');
      },
      toggleMenu() {
        this.menuCollapsed = !this.menuCollapsed;
      },
      getIt() {
      },
    },
  };
</script>

<style lang="scss" scoped>

  .application .theme--light.navigation-drawer {
      background-color: #EBE9E7;
      color: rgba(0,0,0,.87);
  }
  .application .theme--light.navigation-drawer .list {
      background: rgba(0,0,0,0.0) none repeat scroll 0 0;
  }

  .card__title.card__title {
    // background: rgba(0,0,0,0.08);
    text-align: center;
    color: rgba(0,0,0,0.6);
    font-size: 20px;
    padding: 0px 12px 12px 12px;
    border-bottom: 1px solid rgba(0,0,0,0.1);
    .title-header {
      float: none;
      margin: auto;
      font-size: 20px;
    }
  }

</style>