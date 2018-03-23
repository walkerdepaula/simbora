<template>
  <form novalidate @submit.prevent="validateUser" class="form-container">
    <div class="md-layout md-alignment-center-center">
      <md-field>
        <label for="email">Email</label>

        <md-input type="email" name="email" id="email" autocomplete="email" />

        <span class="md-error">The email is required</span>
        <span class="md-error">Invalid email</span>
      </md-field>
    </div>

    <div class="md-layout md-alignment-center-center">
      <md-field>
        <label for="email">Senha</label>
        <md-input type="email" name="email" id="email" autocomplete="email" />
        <span class="md-error">The email is required</span>
        <span class="md-error">Invalid email</span>
      </md-field>
    </div>

    <div class="md-layout md-alignment-center-center">
      <md-button type="submit" class="smbr-void" @click.prevent="validateUser">Entrar</md-button>
    </div>

    <div class="md-layout md-alignment-center-center">
      <md-button type="button" class="smbr-black">Quero fazer parte</md-button>
    </div>
  </form>
</template>

<script>
export default {
  name: 'formAuth',
  data() {
    return {
      userForm: {
        email: '',
        password: ''
      }
    }
  },
  methods: {
    validateUser() {
      console.log('valida: ', this.userForm);
    }
  }
}
</script>

<style scoped lang="scss">
  .form-container {
    width: 50%;
    margin: auto;
    position: absolute;
    bottom: 5vh;
    left: 25vw;
  }
  .smbr-void {
    border: 1px solid black;
    border-radius: 4px;
  }
  .smbr-black {
    background: #1d1d1d;
    color: white;
    border-radius: 4px;
  }
  input {
    border-bottom: 1px solid #1d1d1d !important;
  }
  label {
    left: 39%;
  }
  button {
    width: 160px;
  }
</style>
