<template>
  <div class="row">
    <form @submit.prevent="saveContent(email)">
      <div class="page-break" style="margin-top:-5px;">
        <client-grid :grid-data="emailList"></client-grid>
      </div>
      <div class="col s12">
        <div class="input-field">
          <input v-model="email.from" id="email_from" type="text" class="validate">
          <label for="email_from">From</label>
        </div>
      </div>
      <div class="col s12">
        <div class="input-field ">
          <input v-model="email.subject" id="email_subject" type="text" class="validate">
          <label for="email_subject">Subject</label>
        </div>
      </div>
      <div class="col s12">
        <vue-editor v-model="email.content"></vue-editor>
      </div>
      <div class="col s12 pad-me-vertical">
          <button class="btn btn-outline-success">
              <span class="fa fa-paper-plane" style="margin-right:5px;"></span> Send
          </button>
        </div>
    </form>
  </div>
</template>

<script>
import Materialize from 'materialize-css/dist/js/materialize.min.js';
import { VueEditor } from 'vue2-editor';
import ClientGrid from '@/components/ClientGrid';

export default {

  components: {
    Materialize,
    VueEditor,
    ClientGrid
  },
  data () {
    return {
      email: {
        from: null,
        to: {
          BccAddresses: [],
          CcAddresses: [],
          ToAddresses: []
        },
        subject: null,
        content: '<p>Hello,</p><p><br></p><p>This is an amazing email from OSMoSE!</p><p><br></p><p>Enjoy,</p><p>OSMoSe Team</p>'
      },
      emailList: []
    };
  },
  beforeMount () {
    this.getIt();
  },
  methods: {
    saveContent () {
      this.email.content = '<html><head></head><body>' + this.email.content + '</body></html>';
      this.emailList.forEach((sub) => {
        if (sub.to) {
          this.email.to.ToAddresses.push(sub.email);
        }
        if (sub.cc) {
          this.email.to.CcAddresses.push(sub.email);
        }
        if (sub.bcc) {
          this.email.to.BccAddresses.push(sub.email);
        }
      });

      this.$http.post('https://fqyy1uh5ui.execute-api.us-east-1.amazonaws.com/dev0/email', this.email)
        .then((res) => {
          console.log(res);
          Materialize.toast(`<div class="toaster"><i class="material-icons" style="margin-right:8px;">check</i><span>Email Successfully Sent!</span></div>`, 10000, 'green');
        }).catch((err) => {
          console.log(err);
          Materialize.toast(`<div class="toaster"><i class="material-icons" style="margin-right:8px;">error</i><span>Error Sending Email</span></div>`, 10000, 'red');
        });
    },
    getIt () { 
      this.$http.get('https://fqyy1uh5ui.execute-api.us-east-1.amazonaws.com/dev0/list', {})
        .then((res) => {
          console.log(res);
          this.emailList = [];
          res.data.emailList.forEach((e) => {
            this.emailList.push({
              email: e.Email.S,
              fname: e.FirstName.S,
              lname: e.LastName.S,
              binary: e.EmailBinary.B,
              index: this.emailList.length,
              to: false,
              cc: false,
              bcc: false
            });
          });
          this.emailList = this.emailList.concat(this.emailList);
          console.log(this.emailList);
        }).catch((err) => {
          console.log(err);
        });
    }
  }
};
</script>

<style lang="scss" scoped>

  .pad-me-vertical {
    margin: 15px auto 15px auto;
  }

  #quill-container, .ql-toolbar.ql-snow, .quillWrapper {
    background: #fcfcfc;
    color: #474D57;
  }

</style>
