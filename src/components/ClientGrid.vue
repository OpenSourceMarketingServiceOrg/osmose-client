<template>
  <form action="#">
    <div class="client-grid row ">
      <div class="col s12">
        <h3 class="h-serif">Subscriber List</h3>
        <table class="table table-striped">
          <thead>
            <tr>
              <th class="center">to:</th>
              <th class="center">cc:</th>
              <th class="center">bcc:</th>
              <th class="center">First Name</th>
              <th class="center">Last Name</th>
              <th class="center">Email</th>
            </tr>
            </thead>
            <tbody>
              <tr v-for="sub in gridData" :key="sub.index">
                <td class="center">
                  <input type="checkbox" v-model="sub.to" class="filled-in" :id="'to'+sub.index"/>
                  <label :for="'to'+sub.index"></label>
                </td>
                <td class="center">
                  <input type="checkbox" v-model="sub.cc" class="filled-in" :id="'cc'+sub.index"/>
                  <label :for="'cc'+sub.index"></label>
                </td>
                <td class="center">
                  <input type="checkbox" v-model="sub.bcc" class="filled-in" :id="'bcc'+sub.index"/>
                  <label :for="'bcc'+sub.index"></label>
                </td>
                <td>{{sub.fname}}</td>
                <td>{{sub.lname}}</td>
                <td>{{sub.email}}</td>
              </tr>
          </tbody>
        </table>
      </div>
    </div>
  </form>
</template>

<script>
  // import SlotMixin from './mixins/slot';

  export default {
    name: 'client-grid',
    props: ['grid-data']
  };
</script>

<style lang='scss' scoped>

  table {
    border: 1px solid #ccc;
    color: #493548;
  }

</style>
