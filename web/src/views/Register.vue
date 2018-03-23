<template>
  <div class="register">
    <div class="register-body md-alignment-top-center">
      <div class="user-photo">
        <h2>Quem é você?</h2>
        <div :class="'photo'"></div>
      </div>
      <register-form></register-form>
    </div>
    <div class="register-footer md-layout md-alignment-center-center">
      <md-button type="button" class="smbr-black" @click.prevent="confirmStep">{{stepLabel}}</md-button>
    </div>
  </div>
</template>

<script>
import registerForm from '@/shared/modules/register/_components/register-form.vue'
export default {
  name: 'Register',
  components: {
    registerForm
  },

  data() {
    return {
      step: 1,
      stepLabel: null
    }
  },
  methods: {
    getBack() {
      this.$router.push('auth');
    },
    confirmStep() {
      this.step = 2;
      this.stepLabel = this.step === 1 ? 'Próximo' : 'Entrar';
    }
  },

  created() {
    this.stepLabel = this.step === 1 ? 'Próximo' : 'Entrar';
  }

}
</script>

<style scoped lang="scss">
  .register {
    // height: 100vh;

    .register-body {
      height: calc(100% - 15vh);
      text-align: center;

      .user-photo {
        .photo {
          background-image: url(../assets/login1.png);
          background-size: cover;
          background-repeat: no-repeat;
          width: 100px;
          height: 100px;
          margin: auto;
          border-radius: 100%;
        }
      }
    }

    .register-footer {
      height: 5vh;

      .smbr-black {
        border: 1px solid black;
        border-radius: 4px;
      }
    }
  }
</style>

