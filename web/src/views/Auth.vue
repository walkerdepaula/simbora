<template>
  <div class="auth" :style="{ background: styleConfig.color }">
    <div class="md-layout md-alignment-top-center title-container">
        <h2>SIMBORA</h2>
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
      styleConfig: {},
      styleConfigOptions: [
        {color: 'rgba(234, 6, 6, 0.5)', image: null},
        {color: 'rgba(6, 33, 234, 0.5)', image: null},
        {color: 'rgba(234, 217, 6, 0.5', image:null}
      ]
    }
  },
  methods: {},

  created() {
    const styleConfigOptions = [
        {color: 'rgba(234, 6, 6, 0.5)', image: null},
        {color: 'rgba(6, 33, 234, 0.5)', image: null},
        {color: 'rgba(234, 217, 6, 0.5', image:null}
      ]
    this.styleConfig = styleConfigOptions[Math.floor(Math.random() * styleConfigOptions.length)];
  }
}
</script>

<style scoped lang="scss">
  .auth {
    height: 100vh;
    position: relative;

    .title-container {
      height: calc(100% - 35vh);
    }

    .form {
      position: absolute;
      width: 100%;
      height: 35vh;
    }
  }
</style>

