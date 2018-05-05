<template>
  <form action="#">
    <div class="client-grid row ">
      <div class="col s12">
        <h3 class="h-serif">Subscriber List</h3>
        <div class="toggleCtrlBar">
          <div class="toggleItem">
            <a v-on:click="doToggleToAll()" class="btn btn-primary waves-effect waves-light"><i class="fa" v-bind:class="{ 'fa-square-o': !toToggled, 'fa-check-square-o': toToggled }"></i> To</a>
          </div>
          <div class="toggleItem">
            <a v-on:click="doToggleCCAll()" class="btn btn-primary waves-effect waves-light"><i class="fa" v-bind:class="{ 'fa-square-o': !ccToggled, 'fa-check-square-o': ccToggled }"></i> CC</a>
          </div>
          <div class="toggleItem">
            <a v-on:click="doToggleBCCAll()" class="btn btn-primary waves-effect waves-light"><i class="fa" v-bind:class="{ 'fa-square-o': !bccToggled, 'fa-check-square-o': bccToggled }"></i> BCC</a>
          </div>
        </div>
        <table class="table table-striped responsive-table">
          <thead>
            <tr>
              <th width="10%">to:</th>
              <th width="10%" class="">cc:</th>
              <th width="10%" class="">bcc:</th>
              <th width="20%" class="">First Name</th>
              <th width="20%" class="">Last Name</th>
              <th width="20%" class="">Email</th>
            </tr>
          </thead>
            <tbody>
              <tr v-for="sub in gridData" :key="sub.index">
                <td width="10%">
                  <input type="checkbox" v-model="sub.to" class="filled-in" :id="'to'+sub.index" :disabled="!sub.confirmed"/>
                  <label :for="'to'+sub.index"></label>
                </td>
                <td width="10%">
                  <input type="checkbox" v-model="sub.cc" class="filled-in" :id="'cc'+sub.index" :disabled="!sub.confirmed"/>
                  <label :for="'cc'+sub.index"></label>
                </td>
                <td width="10%">
                  <input type="checkbox" v-model="sub.bcc" class="filled-in" :id="'bcc'+sub.index" :disabled="!sub.confirmed"/>
                  <label :for="'bcc'+sub.index"></label>
                </td>
                <td width="20%">{{sub.fname}}</td>
                <td width="20%">{{sub.lname}}</td>
                <td width="20%">{{sub.email}}</td>
              </tr>
          </tbody>
        </table>
      </div>
    </div>
  </form>
</template>

<script>
  export default {
    name: 'client-grid',
    props: ['grid-data'],
    methods: {
      doToggleToAll () {
        if (!this.toToggled) {
          this.gridData.forEach(sub => {
            if (sub.confirmed) { sub.to = true; }
          });
          this.toToggled = true;
        } else {
          this.gridData.forEach(sub => {
            sub.to = false;
          });
          this.toToggled = false;
        }
      },
      doToggleCCAll () {
        if (!this.ccToggled) {
          this.gridData.forEach(sub => {
            if (sub.confirmed) { sub.cc = true; }
          });
          this.ccToggled = true;
        } else {
          this.gridData.forEach(sub => {
            sub.cc = false;
          });
          this.ccToggled = false;
        }
      },
      doToggleBCCAll () {
        if (!this.bccToggled) {
          this.gridData.forEach(sub => {
            if (sub.confirmed) { sub.bcc = true; }
          });
          this.bccToggled = true;
        } else {
          this.gridData.forEach(sub => {
            sub.bcc = false;
          });
          this.bccToggled = false;
        }
      }
    },
    data () {
      return {
        toToggled: false,
        ccToggled: false,
        bccToggled: false
      };
    }
  };
</script>

<style lang='scss' scoped>

  .toggleCtrlBar {
    max-width:980px;
    text-align: left;
    margin: auto;
    padding-bottom: 10px;
    .toggleItem {
      display:inline-block;
      margin-right: 10px;
      p {
        vertical-align: middle;
      }
    }
  }

  table {
    border: 1px solid #9e9e9e;
    color: #493548;
    max-width:980px;
    table-layout:fixed;
    margin:auto;
    background:rgba(0,0,0,0.025);
  }
  th, td {
    padding:5px 10px;
  }
  thead, tfoot {
    border-bottom: 1px solid #9e9e9e;
    background:rgba(0,0,0,0.025);
    display:table;
    width:100%;
    width:calc(100% - 18px);
  }
  tbody {
    max-height:500px;
    overflow:auto;
    overflow-x:hidden;
    display:block;
    width:100%;
    tr {
      display:table;
      width:100%;
      table-layout:fixed;
    }
  }

</style>
