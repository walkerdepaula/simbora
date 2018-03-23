<template>
  <form novalidate class="form-container">
    <div class="user-photo">
      <h2>Quem é você?</h2>
      <div :class="'photo'"></div>
    </div>
    <div class="md-layout md-alignment-center-center">
      <md-field>
        <label for="name">Nome</label>
        <md-input type="text" v-model="user.name" name="name" id="name" autocomplete="name" />
        <span class="md-error">The name is required</span>
        <span class="md-error">Invalid name</span>
      </md-field>
    </div>

    <div class="md-layout md-alignment-center-center">
      <md-field>
        <label for="email">Email</label>
        <md-input type="email" v-model="user.email" name="email" id="email" autocomplete="email" />
        <span class="md-error">The email is required</span>
        <span class="md-error">Invalid email</span>
      </md-field>
    </div>
    <div class="md-layout md-alignment-center-center">
      <md-field>
        <label for="role">Função</label>
        <md-input type="text" v-model="user.role" name="role" id="role" autocomplete="role" />
        <span class="md-error">The role is required</span>
      </md-field>
    </div>
    <div class="md-layout md-alignment-center-center">
      <md-field>
        <label for="place">Onde você está alocado?</label>
        <md-select class="select" v-model="user.place" name="place" id="place">
          <md-option v-for="item of places" :value="item.id">{{item.name}}</md-option>
        </md-select>
      </md-field>
    </div>
    <div class="register-footer md-layout md-alignment-center-center">
      <md-button type="button" class="smbr-black" @click.prevent="nextStep">Próximo</md-button>
    </div>
  </form>

</template>

<script>
export default {
  name: 'registerFormStepOne',
  data() {
    return {
      places: [],
      user: {
        name: null,
        email: null,
        role: null,
        place: null
      }
    }
  },
  methods: {
    fetchPlaces() {
      this.$http.get('places.json').then( (response) => {
        this.places = response.body
      });
    },

    nextStep() {
      this.$router.push({name: 'register-step-two'});
      this.$store.dispatch('registerUser', this.user);
    }
  },
  created() {
    this.fetchPlaces();
  }
}
</script>

<style scoped lang="scss">
  .form-container {
    width: 80%;
    margin: auto;
    height: calc(100% - 15vh);
    text-align: center;

    .user-photo {
      .photo {
        background-image: url(../../../../assets/login1.png);
        background-size: cover;
        background-repeat: no-repeat;
        width: 100px;
        height: 100px;
        margin: auto;
        border-radius: 100%;
      }
    }
  }

  input, .select {
    border-bottom: 1px solid #d2d2d2 !important;
  }

  .register-footer {
    height: 5vh;
    position: absolute;
    left: 50%;
    transform: translateX(-50%);
    bottom: 0;

    .smbr-black {
      border: 1px solid black;
      border-radius: 4px;
    }
  }

  // .md-select-menu {
  //   background: #fff !important;
  // }

</style>
