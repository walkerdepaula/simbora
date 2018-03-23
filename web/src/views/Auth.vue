<template>
  <div class="auth" :class="styleConfig">
    <div class="md-layout md-alignment-top-center title-container">
        <img src="../assets/SimBora3.svg" >
    </div>

    <div class="md-layout form">
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
  },
  data() {
    return {
      styleConfig: null,
      styleConfigOptions: ['login1', 'login2', 'login3']
    }
  },
  methods: {},

  created() {
    this.styleConfig = this.styleConfigOptions[Math.floor(Math.random() * this.styleConfigOptions.length)];
    console.log(this.styleConfig);
  }
}
</script>

<style scoped lang="scss">
  .auth {
    height: 100vh;
    position: relative;
    background-size: cover;
    background-repeat: no-repeat; 

    &.login1 {
      background-image: url(../assets/login1.png);
    }
    &.login2 {
      background-image: url(../assets/login2.png);
    }
    &.login3 {
      background-image: url(../assets/login3.png);
    }

    .title-container {
      height: calc(100% - 35vh);

      img {
        margin-top: 70px;
        height: 50px;
      }
    }

    .form {
      position: absolute;
      width: 100%;
      height: 35vh;
    }
  }
</style>

