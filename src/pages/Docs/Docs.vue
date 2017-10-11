<template>
<v-container fluid grid-list-sm grid-list-md class="grey lighten-4">
    <v-layout row wrap>
      <div class="display-1 rg-blue--text mb-3">Documentation</div>
      
      <v-flex xs12 md12 lg12>
        <!-- <v-btn primary @click="getIt()">Get It</v-btn> -->
      </v-flex>
    </v-layout>
  </v-container>
</template>

<script>
  import VCard from '@/components/Card';

  export default {
    name: 'docs-index',
    components: {
      VCard,
    },
    methods: {
    
      
    }
  };
</script>
