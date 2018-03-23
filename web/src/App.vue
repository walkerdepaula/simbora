<template>
  <div id="app">
    <app-header v-if="appHeaderShow"></app-header>

    <router-view/>

    <!-- <div id="nav">
      <router-link to="/">Home</router-link> |
      <router-link to="/about">About</router-link>
    </div> -->
  </div>
</template>

<script>
  import appHeader from '@/shared/modules/header/_components/header.vue';

  export default {
    components: {
      appHeader
    },
    data() {
      return {
        appHeaderShow: true
      }
    },
    watch: {
      '$route' (to, from) {
        this.appHeaderShow = to.name !== 'auth'
      }
    }
  }
</script>

<style lang="scss">
  #app {
    height: 100vh;
    position: relative;
  }
</style>
