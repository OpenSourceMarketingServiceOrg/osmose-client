<template>
    <v-container fluid grid-list-sm grid-list-md class="grey lighten-4">
      <v-layout row wrap>
        <v-flex 
          xs6 md4 lg3
          v-for="item in items"
          :key="item.title" >
          <v-card class="info  darken-2 white--text">
              <v-container fill-height fluid >
                <v-layout column wrap>
                  <v-flex xs12 sm12 md12 >
                    <v-icon class="white--text" style="display:block;text-align:center;font-size:60px;">{{item.icon}}</v-icon>
                    <div style="display:block;text-align:center;font-size:1.6em;padding-top:8px;">{{item.title}}</div>
                  </v-flex>
                </v-layout> 
                </v-container>
          </v-card>
        </v-flex>
      </v-layout>
    </v-container>        
</template>

<script>
  // import VCard from '@/components/Card';
    import SlotMixin from '@/mixins/slot';

  export default {
    name: 'home-index',
    mixins: [
      SlotMixin,
    ],
    data() {
      return {
      items: [
        { title: 'Documentation', icon: 'library_books', name: 'docs.index', flex: 4 },
        { title: 'Demos', icon: 'stars', name: 'demos.index', flex: 4},
        { title: 'Github', icon: 'face', name: 'https://github.com', flex: 4},
      ]
    }},

    components: {
      // VCard,
    },
  };
</script>

<style lang="scss" scoped>
  // .application--light .card, .application .theme--light.card.dash-items {
  //   height: 200px;
  //   // background:black;
  // }
.card-block {
  text-align: center;
  font-size: 6rem;
}
  
</style>
