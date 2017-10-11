<template>
<v-container fluid grid-list-sm grid-list-md class="grey lighten-4">
    <v-layout row wrap>
      <div class="display-1 rg-blue--text mb-3">Demos</div>
      
      <v-flex xs12 md12 lg12>
        <v-btn primary @click="getIt()">Get It</v-btn>
      </v-flex>
    </v-layout>
  </v-container>
</template>

<script>
  import VCard from '@/components/Card';

  export default {
    name: 'demos-index',
    components: {
      VCard,
    },
    methods: {
      // https://fqyy1uh5ui.execute-api.us-east-1.amazonaws.com/dev0/osmose-serverless-dev0-emailList
      getIt() {
        this.$http.get('https://wpuwgnyjbf.execute-api.us-east-1.amazonaws.com/dev1/list', {}).then(function(data) {
          console.log(data);
            // transition.next()
        }).catch(function (data, status, request) {
            console.log(data);
            console.log(status);
            console.log(request);
        });
      },
      
    }
  };
</script>
