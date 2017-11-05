<template>
  <div class="row grey lighten-4">
    <div class="col s12">
      <h3 style="primary-color-dark" class="h-serif">New Subscriber</h3>
    </div>
    <div class="row">
      <form @submit.prevent="save(subscriber)" class="col s12">
        <div class="row">
          <div class="input-field col s6">
            <i class="material-icons prefix">account_circle</i>
            <input id="first_name" type="text" class="validate p-sans">
            <label for="first_name" class="p-sans">First Name</label>
          </div>
          <div class="input-field col s6">
            <input id="last_name" type="text" class="validate p-sans">
            <label for="last_name" class="p-sans">Last Name</label>
          </div>
        </div>
        <div class="form-group">
          <div class="input-field col s12">
            <i class="material-icons prefix">email</i>
            <input id="email" type="email" class="validate p-sans">
            <label for="email" class="p-sans">Email</label>
          </div>
        </div>
        <div class="form-group">
          <a class="waves-effect waves-light btn os-btn">
            Save
          </a>
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
                <td><a danger @click="deleteSub(sub)"><span style="color:red;" class="fa fa-trash"></span></a></td>
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
  export default {
    name: 'Demo',
    data () {
      return {
        emailList: [],
        subscriber: {}
      };
    },
    components: {
    //   VCard
    },
    beforeMount () {
      this.getIt();
    },
    methods: {
      getIt () {
        let self = this;
        this.$http.get('https://fqyy1uh5ui.execute-api.us-east-1.amazonaws.com/dev0/list', {})
          .then((res) => {
            console.log(res);
            self.emailList = [];
            res.data.emailList.forEach((e) => {
              self.emailList.push({email: e.Email.S, fname: e.FirstName.S, lname: e.LastName.S, binary: e.EmailBinary.B, index: self.emailList.length});
            });
            console.log(self.emailList);
          }).catch((err) => {
            console.log(err);
          });
      },
      save (sub) {
        this.$http.post('https://fqyy1uh5ui.execute-api.us-east-1.amazonaws.com/dev0/list', sub)
          .then((res) => {
            console.log(res);
          }).catch((err) => {
            console.log(err);
          });
      },
      deleteSub (sub) {
        this.$http.delete('https://fqyy1uh5ui.execute-api.us-east-1.amazonaws.com/dev0/list', sub)
          .then((res) => {
            console.log(res);
          }).catch((err) => {
            console.log(err);
          });
      }
    }
  };
</script>
