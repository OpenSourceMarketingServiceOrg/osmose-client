<template>
  <v-data-table
    v-bind:headers="headers"
    v-bind:items="items"
    v-bind:search="search"
    v-model="selected"
    item-key="name"
    select-all
    class="elevation-1">

    <template slot="headerCell" scope="props">
      <v-tooltip bottom>
        <span slot="activator">
          {{ props.header.text }}
        </span>
        <span>
          {{ props.header.text }}
        </span>
      </v-tooltip>
    </template>
    <template slot="items" scope="props">
      <td>
        <v-checkbox
          primary
          hide-details
          v-model="props.selected">
        </v-checkbox>
      </td>
      <td>{{ props.item.name }}</td>
      <td class="text-xs-left">{{ props.item.fname }}</td>
      <td class="text-xs-left">{{ props.item.lname }}</td>
    </template>
  </v-data-table>
</template>

<script>

  import SlotMixin from '@/mixins/slot';

  export default {
    name: 'client-grid',
    // mixins: [
    //   SlotMixin,
    // ],
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
            fname: "Quinn",
            lname: "Lawrence"
          },
          {
            value: false,
            name: 'danjenator@gmail.com',
            fname: "Dan",
            lname: "Brown"
          },
          {
            value: false,
            name: 'bob.bobbington@gmail.com',
            fname: "Bob",
            lname: "Bobbington"
          },
        ]
      }
    }
  }
</script>

<style lang="scss" scoped>

// </style>
