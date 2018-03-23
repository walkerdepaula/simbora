<template>
    <form novalidate class="form-container">
        <h2>Pelo o que você se interessa?</h2>
    </form>
</template>

<script>
export default {
  name: 'registerFormStepTwo',
  data() {
    user: this.getStepOneData()
  },
  methods: {
    getStepOneData() {
      return this.$store.getters.getUser;
    }
  },
  created() {
    this.getStepOneData();
  }
}
</script>

<style scoped lang="scss">
  .form-container {
    width: 80%;
    margin: auto;
  }

  input, .select {
    border-bottom: 1px solid #d2d2d2 !important;
  }

  .md-menu-content-container {
    background: #fff !important;
  }

</style>
