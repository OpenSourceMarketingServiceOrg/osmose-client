<template>
  <div class="row grey lighten-4">
    <div class="col s12">
      <h3 style="primary-color-dark" class="h-serif">New Subscriber</h3>
    </div>
    <div class="row">
      <form novalidate v-on:submit.prevent="addUser">
        <div class="input-field col s6">
          <i class="material-icons prefix">account_circle</i>
          <input required v-model.lazy.trim='user.fname' id="first_name" type="text" class="validate p-sans" v-bind:disabled="shouldDisable">
          <label for="first_name" class="p-sans">First Name</label>
        </div>
        <div class="input-field col s6">
          <input required v-model.lazy.trim='user.lname' id="last_name" type="text" class="validate p-sans" v-bind:disabled="shouldDisable">
          <label for="last_name" class="p-sans">Last Name</label>
        </div>
        <div class="form-group">
          <div class="input-field col s12">
            <i class="material-icons prefix">email</i>
            <input required v-model.lazy.trim='user.email' id="email" type="email" class="validate p-sans" v-bind:disabled="shouldDisable">
            <label for="email" class="p-sans">Email</label>
          </div>
        </div>
        <div class="col s12">
          <button type="submit" v-bind:disabled="(!user.fname || !user.lname || shouldDisable || !isEmail(user.email))" value="Submit" class="btn btn-success waves-effect waves-light">
            Save
          </button>
        </div>
      </form>
    </div>
    <div class="row">
      <div class="col s12">
        <h3 class="h-serif">Subscriber List</h3>
        <table class="table table-striped">
          <thead>
            <tr>
              <th>First Name</th>
              <th>Last Name</th>
              <th>Email</th>
              <th></th>
            </tr>
            </thead>
            <tbody>
              <tr v-for="sub in emailList" :key="sub.index">
                <td>{{sub.fname}}</td>
                <td>{{sub.lname}}</td>
                <td>{{sub.email}}</td>
                <td><a danger @click="deleteSub(sub.email)"><span style="color:red;" class="fa fa-trash"></span></a></td>
              </tr>
          </tbody>
        </table>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
@import "../assets/style/settings.scss";
  .table th, .table td {
    vertical-align: middle;
  }
  .container .row {
    margin-left: 0;
    margin-right: 0;
  }
</style>

<script>
  import Materialize from 'materialize-css/dist/js/materialize.min.js';
  export default {
    name: 'Demo',
    data () {
      return {
        emailList: [],
        subscriber: {},
        shouldDisable: false,
        user: {
          fname: '',
          lname: '',
          email: ''
        }
      };
    },
    components: {
      Materialize
    },
    beforeMount () {
      this.getIt();
    },
    methods: {
      getIt () { 
        this.$http.get('https://zsazrlvshe.execute-api.us-east-1.amazonaws.com/dev1/list', {})
          .then((res) => {
            console.log(res);
            this.emailList = [];
            res.data.emailList.forEach((e) => {
              this.emailList.push({email: e.Email.S, fname: e.FirstName.S, lname: e.LastName.S, binary: e.EmailBinary.B, index: this.emailList.length});
            });
            console.log(this.emailList);
          }).catch((err) => {
            console.log(err);
          });
      },
      addUser () {
        console.log(this.user);
        this.$http.post('https://zsazrlvshe.execute-api.us-east-1.amazonaws.com/dev1/list', this.user)
          .then((res) => {
            console.log(res);
            let successMsg = `<div class="toaster"><i class="material-icons" style="margin-right:8px;">check</i><span>Sign Up Success!</span></div>`;
            Materialize.toast(successMsg, 10000, 'green');
            this.reset();
          }).catch((err) => {
            console.log(err);
            let errorMsg = `<div class="toaster"><i class="material-icons" style="margin-right:8px;">error</i><span>Error Signing Up</span></div>`;
            Materialize.toast(errorMsg, 10000, 'red');
            this.reset();
          });
      },
      deleteSub (emailToDelete) {
        console.log('email to be deleted4: ', emailToDelete);
        let deleteParams = {
          params: {
            emailToDelete: emailToDelete
          }
        };
        console.log('deleteParams: ', deleteParams);
        this.$http.delete('https://zsazrlvshe.execute-api.us-east-1.amazonaws.com/dev1/list', deleteParams)
          .then((res) => {
            console.log(res);
            this.getIt();
          }).catch((err) => {
            console.log(err);
          });
      },
      isEmail (email) {
        // eslint-disable-next-line
        let ePattern = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        console.log(ePattern.test(email));
        return ePattern.test(email);
      },
      reset () {
        this.shouldDisable = false;
        this.user = {
          fname: '',
          lname: '',
          email: ''
        };
        this.getIt();
      }
    }
  };
</script>
