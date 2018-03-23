<template>
  <div id="app">
    <app-header v-if="appHeaderShow"></app-header>

    <router-view/>
    
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
    height: calc(100vh - 5vh);
    position: relative;
  }
</style>
