<template>
    <div class="row grey lighten-4">
      <div class="col s12">
        <form @submit.prevent="saveContent(email)">
          
        <client-grid></client-grid>
        
        <div class="col s12">
          <div class="input-field ">
            <input v-model="email.subject" id="email_subject" type="text" class="validate">
            <label for="email_subject">Subject</label>
          </div>
        </div>

        <vue-editor v-model="email.content"></vue-editor>
            <div class="col s12">
                <button class="btn btn-outline-success">
                    <span class="fa fa-paper-plane" style="margin-right:5px;"></span> Send
                </button>
          </div>
        </form>
      </div>
    </div>
</template>

<!-- <div class="form-group">
            <div class="input-group input-group-lg">
              <div class="input-group-addon">
                <i class="fa fa-user fa-fw"></i>
              </div>
              <input v-model="email.sendTo" type="text" placeholder="Send To" class="form-control" />
            </div>
          </div> -->

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
           subject: null,
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
