<template>
  <div id="app">
    <app-header></app-header>
    <router-view/>

    <!-- <div id="nav">
      <router-link to="/">Home</router-link> |
      <router-link to="/about">About</router-link>
    </div> -->
  </div>
</template>

<<script>
  import appHeader from '@/shared/modules/header/_components/header.vue'
  export default {
    components: {
      appHeader
    }
  }
</script>

<style lang="scss">
  #app {
    height: calc(100vh - 5vh);
    position: relative;
  }
</style>
