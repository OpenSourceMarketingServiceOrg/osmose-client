<template>
  <v-layout>
    <v-card contextual-style="dark">
      <span slot="header">
        New Email
      </span>
      <div slot="body">
        <div class="row pad-me">
            <div class="col-md-6">
                <label class="">Title</label>
                <input class="form-control input-lg"></input>
            </div>
            <div class="col-md-6">
                <label class="">Subject</label>
                <input class="form-control input-lg"></input>
            </div>
            </div>
            <div class="row pad-me">
            <div class="col-md-12">
                <textarea class="form-control input-lg" rows="3"></textarea>
            </div>
        </div>
      </div>
      <div slot="footer">
        You're still here? Its over. Go email. 
      </div>
    </v-card>
  </v-layout>
</template>

<style lang="scss" scoped>

.pad-me {
  margin: 10px auto 10px auto;

  label {
    font-weight:bold;
    margin-bottom:4px;
  }   
}

</style>

<script>

  import VLayout from '@/layouts/Default';
  import VCard from '@/components/Card';

  export default {
    name: 'email-index',
    components: {
      VLayout,
      VCard,
    },
  };
</script>
