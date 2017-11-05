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

import { VueEditor } from 'vue2-editor';
import ClientGrid from '@/components/ClientGrid';

export default {

  components: {
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
      // this.email.to.push(this.email.sendTo);

      let self = this;

      self.email.content = '<html><head></head><body>' + self.email.content + '</body></html>';
      self.emailList.forEach((sub) => {
        if (sub.to) {
          self.email.to.ToAddresses.push(sub.email);
        } else if (sub.cc) {
          self.email.to.CcAddresses.push(sub.email);
        } else if (sub.bcc) {
          self.email.to.BccAddresses.push(sub.email);
        }
      });

      this.$http.post('https://fqyy1uh5ui.execute-api.us-east-1.amazonaws.com/dev0/email', this.email)
        .then((res) => {
          console.log(res);
          // transition.next();
        }).catch((err) => {
          console.log(err);
        });
    },
    getIt () {
      let self = this;
      this.$http.get('https://fqyy1uh5ui.execute-api.us-east-1.amazonaws.com/dev0/list', {})
        .then((res) => {
          console.log(res);
          self.emailList = [];
          res.data.emailList.forEach((e) => {
            self.emailList.push({
              email: e.Email.S,
              fname: e.FirstName.S,
              lname: e.LastName.S,
              binary: e.EmailBinary.B,
              index: self.emailList.length
            });
          });
          console.log(self.emailList);
        }).catch((err) => {
          console.log(err);
        });
    }
  }
};
</script>
