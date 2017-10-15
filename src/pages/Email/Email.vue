<template>
  <v-container fluid grid-list-sm grid-list-md class="grey lighten-4">
    <v-layout row wrap>
      <v-flex xs12 md12 lg12>
        <div class="display-1 rg-blue--text mb-3">New Email</div>
      </v-flex>
      <v-flex xs12 md12 lg12>
        <form @submit.prevent="saveContent(email)">
          <!-- <div class="form-group">
            <div class="input-group input-group-lg">
              <div class="input-group-addon">
                <i class="fa fa-user fa-fw"></i>
              </div>
              <input v-model="email.sendTo" type="text" placeholder="Send To" class="form-control" />
            </div>
          </div> -->
          <client-grid></client-grid>
          <div class="form-group">
            <div class="input-group input-group-lg">
              <div class="input-group-addon">
                <i class="fa fa-file-text fa-fw"></i>
              </div>
              <input v-model="email.subject" type="text" placeholder="Subject" class="form-control" />
            </div>
          </div>
        <vue-editor v-model="email.content"></vue-editor>
        <div class="form-group">
            <button class="btn btn-outline-success">
              <span class="fa fa-paper-plane" style="margin-right:5px;"></span> Send
            </button>
          </div>
        </form>
      </v-flex>
    </v-layout>
  </v-container>
</template>

<style lang="scss" scoped>

// .pad-me {
//   margin: 10px auto 10px auto;

//   label {
//     font-weight:bold;
//     margin-bottom:4px;
//   }   
// }

</style>

<script>

  import { VueEditor } from 'vue2-editor';
  import ClientGrid from '@/components/ClientGrid';

 export default {
 
   components: {
      VueEditor,
      ClientGrid
   },
 
   data() {
       return {
         email: {
           to: [],
           subject: "The Best Email",
           content: "<p>Hello,</p><p><br></p><p>This is an amazing email from OZMoSE!</p><p><br></p><p>Enjoy,</p><p>OSMoSe Team</p>"
           }
       }
     },

  methods: {
      saveContent() {
        // You have the content to save 
        console.log(this.email);
        this.email.to.push(this.email.sendTo);
        this.email.content = "<html><head></head><body>" + this.email.content + "</body></html>";
        console.log(this.email);
        // let email = {to: [this.email.sendTo], subject: this.email.subject, lname:"L"};
        this.$http.post('https://fqyy1uh5ui.execute-api.us-east-1.amazonaws.com/dev0/email', this.email)
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
