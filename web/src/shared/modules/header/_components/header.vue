<template>
    <div class="header">
      <div class="icon-button" @click.prevent="getBack()">
        <md-icon class="icon">keyboard_arrow_left</md-icon>
      </div>
      <img src="@/assets/SimBora.svg" >
    </div>
</template>

<script>
    export default {}
</script>

<style scoped lang="scss">
    .header {
      height: 5vh;
      padding-top: 10px;
      text-align: center;

      .icon-button {
        float: left;
        cursor: pointer;
      }

      img {
          height: 20px;
          margin: auto;
      }
    }
</style>
