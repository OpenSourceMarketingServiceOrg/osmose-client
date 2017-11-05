<template>

    <div class="client-grid row ">
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

</template>

<script>
  // import SlotMixin from './mixins/slot';

  export default {
    name: 'client-grid',
    data () {
      return {
        emailList: [],
        subscriber: {}
      };
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
    beforeMount () {
      this.getIt();
    },
    methods : {
      getIt() {
        let self = this;
        this.$http.get('https://fqyy1uh5ui.execute-api.us-east-1.amazonaws.com/dev0/list', {})
          .then((res) => {
            self.emailList = [];
            res.data.emailList.forEach((e) => {
              self.emailList.push({email: e.Email.S, fname: e.FirstName.S, lname: e.LastName.S, binary: e.EmailBinary.B, index: self.emailList.length});
            });
          }).catch((err) => {
            console.error(err);
          });
      }
    }
  };
</script>

<style lang='scss' scoped>

  table {
    border: 1px solid #ccc;
    color: #493548;
  }

</style>
