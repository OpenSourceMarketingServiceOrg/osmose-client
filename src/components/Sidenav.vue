<template>
    <v-navigation-drawer
        persistent
        :mini-variant="miniVariant"
        :clipped="clipped"
        v-model="drawer"
        enable-resize-watcher
        light
        class="pb-0">
        <v-list>
            <v-list-tile
                value="true"
                v-for="(item, i) in items"
                :key="i">
                <v-list-tile-action>
                    <v-icon light v-html="item.icon"></v-icon>
                </v-list-tile-action>
                <v-list-tile-content>
                    <v-list-tile-title v-text="item.title"></v-list-tile-title>
                </v-list-tile-content>
            </v-list-tile>
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
    data() {
      return {
        menuCollapsed: false,
        clipped: true,
        drawer: true,
        fixed: false,
        items: [
          { icon: 'bubble_chart', title: 'Inspire' }
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

</style>