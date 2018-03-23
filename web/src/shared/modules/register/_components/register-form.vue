<template>
  <form novalidate class="form-container">
    <div class="md-layout md-alignment-center-center">
      <md-field>
        <label for="name">Nome</label>
        <md-input type="text" :model="user.name" name="name" id="name" autocomplete="name" />
        <span class="md-error">The name is required</span>
        <span class="md-error">Invalid name</span>
      </md-field>
    </div>

    <div class="md-layout md-alignment-center-center">
      <md-field>
        <label for="email">Email</label>
        <md-input type="email" :model="user.email" name="email" id="email" autocomplete="email" />
        <span class="md-error">The email is required</span>
        <span class="md-error">Invalid email</span>
      </md-field>
    </div>
    <div class="md-layout md-alignment-center-center">
      <md-field>
        <label for="role">Função</label>
        <md-input type="text" :model="user.role" name="role" id="role" autocomplete="role" />
        <span class="md-error">The role is required</span>
      </md-field>
    </div>
    <div class="md-layout md-alignment-center-center">
        <md-field>
            <label for="location">Onde você está alocado?</label>
            <md-select :model="user.location" name="location" id="location">
                <md-option value="sp">SP</md-option>
            </md-select>
        </md-field>
    </div>

  </form>
</template>

<script>
export default {
  name: 'registerForm',
  data() {
    return {
        user: {
            name: null,
            email: null,
            role: null,
            location: null
        }
    }
  },
  methods: {},
}
</script>

<style scoped lang="scss">
  .form-container {
    width: 80%;
    margin: auto;
  }

  input {
    border-bottom: 1px solid #d2d2d2 !important;
  }

</style>
