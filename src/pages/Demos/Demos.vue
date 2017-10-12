<template>
<v-container fluid grid-list-sm grid-list-md class="grey lighten-4">
    <v-layout row wrap>
      <v-flex xs12 md12 lg12>
        <div class="display-2 rg-blue--text mb-3" style="font-weight:bold;">Demos</div>
      </v-flex>
      <v-flex xs12 md6 lg6>
        <h5 class="rg-blue--text mb-1"><u>New Subscribers</u></h5>
        <form @submit.prevent="save(subscriber)">
          <div class="form-group">
            <div class="input-group input-group-lg">
              <div class="input-group-addon">
                <i class="fa fa-user fa-fw"></i>
              </div>
              <input v-model="subscriber.fname" type="text" placeholder="First Name" class="form-control" />
            </div>
          </div>
          <div class="form-group">
            <div class="input-group input-group-lg">
              <div class="input-group-addon">
                <i class="fa fa-user fa-fw"></i>
              </div>
              <input v-model="subscriber.lname" type="text" placeholder="Last Name" class="form-control" />
            </div>
          </div>
          <div class="form-group">
            <div class="input-group input-group-lg">
              <div class="input-group-addon">
                <i class="fa fa-envelope fa-fw"></i>
              </div>
              <input v-model="subscriber.email" type="text" placeholder="Email" class="form-control" />
            </div>
          </div>
          <div class="form-group">
            <button class="btn btn-outline-success">
              Save
            </button>
          </div>
        </form>
      </v-flex>
      <v-flex xs12 md6 lg6>
        <h5 class="rg-blue--text mb-1"><u>Subscriber List</u></h5>
        <!-- <ul>
          <li v-for="sub in emailList" :key="sub.index" style="font-size:1.2rem;">
            {{ sub.email }}
          </li>
        </ul> -->
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
                <td><a danger @click="deleteSub(sub)"><span style="color:red;" class="fa fa-trash fa-2x"></span></a></td>
              </tr>
          </tbody>
        </table>
      </v-flex>
    </v-layout>
  </v-container>
</template>

<style lang="scss" scoped>
  .table th, .table td {
    vertical-align: middle;
  }
</style>

<script>
  import VCard from '@/components/Card';

  export default {
    name: 'demos-index',
    data() {
      return {
        emailList: [],
        subscriber: {}
      }
    },
    components: {
      VCard,
    },
    beforeMount() {
        this.getIt()
    },
    methods: {
      getIt() {
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
      save(sub) {
        this.$http.post('https://fqyy1uh5ui.execute-api.us-east-1.amazonaws.com/dev0/list', sub)
          .then((res) => {
            console.log(res);
          }).catch((err) => {
              console.log(err);
          });
      },
      deleteSub(sub) {
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
