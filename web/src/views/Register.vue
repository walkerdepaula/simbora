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
    // confirmStep() {
    //   this.stepLabel = this.step === 1 ? 'Próximo' : 'Entrar';
    //   console.log(this.$router.history.current.name)
    //   if(this.step === 1) {
    //     this.$router.push({name: 'register-step-two'});
    //     this.step = 2;
    //   } else {
    //     console.log('aeho');
    //   }
    // }
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

