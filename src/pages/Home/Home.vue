<template>
  <v-container fluid grid-list-sm grid-list-md class="grey lighten-4">
    <v-layout row wrap>
      <v-flex xs12 md12 lg12>
        <!-- <h3>Rock your next marketing campaign.</h3> -->
        <div class="display-1 rg-blue--text mb-3">Rock your next marketing campaign</div>
      </v-flex>

      <v-flex 
        xs6 md4 lg3
        v-for="item in items"
        :key="item.title">
        <!-- This is for internal routes -->
        <v-btn :ripple="true" v-if="item.route" floating class="info darken-2 white--text" style="width:100%;height:100%;" :to="{ name: item.route }" >
            <v-container fill-height fluid >
              <v-layout column wrap>
                <v-flex xs12 sm12 md12>
                  <v-icon class="white--text" style="display:block;text-align:center;font-size:60px;">{{item.icon}}</v-icon>
                  <div style="display:block;text-align:center;font-size:1.6em;padding-top:8px;">{{item.title}}</div>
                </v-flex>
              </v-layout> 
            </v-container>
          </v-btn>
          <!-- This is for external links -->
          <v-btn :ripple="true" v-if="item.link" floating class="info darken-2 white--text" style="width:100%;height:100%;" :href="item.link" target="_blank" >
            <v-container fill-height fluid >
              <v-layout column wrap>
                <v-flex xs12 sm12 md12>
                  <v-icon class="white--text" style="display:block;text-align:center;font-size:60px;">{{item.icon}}</v-icon>
                  <div style="display:block;text-align:center;font-size:1.6em;padding-top:8px;">{{item.title}}</div>
                </v-flex>
              </v-layout> 
            </v-container>
          </v-btn>
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
        { title: 'Documentation', icon: 'library_books', route: 'docs.index', flex: 4 },
        { title: 'Demos', icon: 'stars', route: 'demos.index', flex: 4},
        { title: 'Github', icon: 'fa fa-github', link: 'https://github.com', flex: 4},
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
