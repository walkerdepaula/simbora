<template>
  <div class="auth">
    <div class="md-layout md-alignment-center-center">
      <h2>SIMBORA</h2>
    </div>

    <div class="md-layout">
      <form-auth></form-auth>
    </div>
  </div>
</template>

<script>
import formAuth from '../shared/modules/auth/_components/form-auth.vue';

export default {
  name: 'Auth',
  components: {
    formAuth
  }
}
</script>

<style scoped>

</style>

