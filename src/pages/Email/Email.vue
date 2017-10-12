<template>
  <v-container fluid grid-list-sm grid-list-md class="grey lighten-4">
    <v-layout row wrap>
      <v-flex xs12 md12 lg12>
        <div class="display-1 rg-blue--text mb-3">New Email</div>
      </v-flex>
      <v-flex xs12 md12 lg12>
        <vue-editor v-model="content"></vue-editor>
        <v-btn primary @click="saveContent()">Save</v-btn>
      </v-flex>
    </v-layout>
  </v-container>
</template>

<style lang="scss" scoped>

.pad-me {
  margin: 10px auto 10px auto;

  label {
    font-weight:bold;
    margin-bottom:4px;
  }   
}

</style>

<script>

  import { VueEditor } from 'vue2-editor';

 export default {
 
   components: {
      VueEditor
   },
 
   data() {
       return {
         content: '<h1>Some initial content</h1>'  
       }
     },

  methods: {
      saveContent() {
        // You have the content to save 
        // console.log(this.content);
        let toSave = {email: 'qtlaw5@gmail.com', fname:"Quinn", lname:"L"};
        this.$http.post('https://fqyy1uh5ui.execute-api.us-east-1.amazonaws.com/dev0/list', toSave)
          .then((res) => {
            console.log(res);
              // transition.next();
          }).catch((err) => {
              console.log(err);
          });
      }
    }  
   }
</script>
