<template>
 <!-- <div class="row">
      <div class="col s7 push-s5"><span class="flow-text">This div is 7-columns wide on pushed to the right by 5-columns.</span></div>
      <div class="col s5 pull-s7"><span class="flow-text">5-columns wide pulled to the left by 7-columns.</span></div>
    </div> -->

    <div class="client-grid" >
        <div class="row">
                <div class="grid-example col s3"><span class="flow-text"> </span></div>
                <div class="grid-example col s3"><span class="flow-text">Email</span></div>
                <div class="grid-example col s3"><span class="flow-text">First Name</span></div>
                <div class="grid-example col s3"><span class="flow-text">Last Name</span></div>
            </div>
        <div v-for="item in items" :key="item.index">
            <div class="row">
                <div class="grid-example col s3"><span class="flow-text">{{item.value}}</span></div>
                <div class="grid-example col s3"><span class="flow-text">{{item.name}}</span></div>
                <div class="grid-example col s3"><span class="flow-text">{{item.fname}}</span></div>
                <div class="grid-example col s3"><span class="flow-text">{{item.lname}}</span></div>
            </div>
            <!-- <div class="divider"></div> -->
        </div>
    </div>
    <!-- <div class="section">
        <h5>Section 1</h5>
        <p>Stuff</p>
    </div> -->
  <!-- <v-data-table
    v-bind:headers='headers'
    v-bind:items='items'
    v-bind:search='search'
    v-model='selected'
    item-key='name'
    select-all
    class='elevation-1'>

    <template slot='headerCell' scope='props'>
      <v-tooltip bottom>
        <span slot='activator'>
          {{ props.header.text }}
        </span>
        <span>
          {{ props.header.text }}
        </span>
      </v-tooltip>
    </template>
    <template slot='items' scope='props'>
      <td>
          <input type="checkbox" class="filled-in" id="filled-in-box" checked="checked" />
        <v-checkbox
          primary
          hide-details
          v-model='props.selected'>
        </v-checkbox>
      </td>
      <td>{{ props.item.name }}</td>
      <td class='text-xs-left'>{{ props.item.fname }}</td>
      <td class='text-xs-left'>{{ props.item.lname }}</td>
    </template>
  </v-data-table> -->
</template>

<script>
  import SlotMixin from './mixins/slot';

  export default {
    name: 'client-grid',
    data () {
      return {
        search: '',
        selected: [],
        headers: [
          {
            text: 'Email Address',
            align: 'left',
            value: 'email',
            sortable: true
          },
          {
            text: 'First Name',
            align: 'left',
            value: 'fname',
            sortable: true
            },
          {
            text: 'Last Name',
            align: 'left',
            value: 'lname',
            sortable: true
            }
        ],
        items: [
          {
            value: false,
            name: 'qtlaw5@gmail.com',
            fname: 'Quinn',
            lname: 'Lawrence'
          },
          {
            value: false,
            name: 'danjenator@gmail.com',
            fname: 'Dan',
            lname: 'Brown'
          },
          {
            value: false,
            name: 'bob.bobbington@gmail.com',
            fname: 'Bob',
            lname: 'Bobbington'
          },
        ]
      };
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
.client-grid {

}
</style>
