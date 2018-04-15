<template>
    <div class="row ">
      <div class="col s12">
        <form @submit.prevent="saveContent(email)">
          <client-grid :grid-data="emailList"></client-grid>
          <div class="col s6">
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
          <div class="col s12 pad-me">
              <button class="btn btn-outline-success">
                  <span class="fa fa-paper-plane" style="margin-right:5px;"></span> Send
              </button>
            </div>
        </form>
      </div>
    </div>
</template>

<style lang="scss" scoped>
  .pad-me {
    margin: 10px auto 10px auto;
  }
</style>

<script>
import Materialize from 'materialize-css/dist/js/materialize.min.js';
import { VueEditor } from 'vue2-editor';
import ClientGrid from '@/components/ClientGrid';
import config from '../../config/osmose';

export default {

  components: {
    Materialize,
    VueEditor,
    ClientGrid
  },
  data () {
    return {
      email: {
        from: '',
        to: {
          BccAddresses: [],
          CcAddresses: [],
          ToAddresses: []
        },
        subject: '',
        content: ''
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

      this.$http.post(config.api.email, this.email)
        .then((res) => {
          Materialize.toast(`<div class="toaster"><i class="material-icons" style="margin-right:8px;">check</i><span>Email Successfully Sent!</span></div>`, 10000, 'green');
          this.emailList.forEach((sub) => {
            if (sub.to) {
              sub.to = [];
            }
            if (sub.cc) {
              sub.cc = [];
            }
            if (sub.bcc) {
              sub.bcc = [];
            }
          });
          this.email.to.ToAddresses = [];
          this.email.to.CcAddresses = [];
          this.email.to.ToAddresses = [];
        }).catch((err) => {
          console.error(err);
          Materialize.toast(`<div class="toaster"><i class="material-icons" style="margin-right:8px;">error</i><span>Error Sending Email</span></div>`, 10000, 'red');
        });
    },
    getIt () { 
      this.$http.get(config.api.list.get, {})
        .then((res) => {
          this.emailList = [];
          res.data.emailList.forEach((e) => {
            this.emailList.push({
              email: e.Email.S,
              fname: e.FirstName.S,
              lname: e.LastName.S,
              confirmed: e.Confirmed.BOOL,
              binary: e.EmailBinary.B,
              index: this.emailList.length,
              to: false,
              cc: false,
              bcc: false
            });
          });
        }).catch((err) => {
          console.error(err);
        });
    }
  }
};
</script>
