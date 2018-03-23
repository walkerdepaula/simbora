<template>
  <div class="register">
    <div class="register-body md-alignment-top-center">
      <router-view></router-view>
    </div>

  </div>
</template>

<script>
export default {
  name: 'Register',
  components: {},

  data() {
    return {
      step: 1,
      stepLabel: null
    }
  },
  methods: {
  },

  created() {
    this.stepLabel = this.step === 1 ? 'Próximo' : 'Entrar';
  }

}
</script>

<style scoped lang="scss">
  .register {
    height: calc(95vh - 20px);
  }
</style>

