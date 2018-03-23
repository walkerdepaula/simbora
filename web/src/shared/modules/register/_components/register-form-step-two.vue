<template>
  <form novalidate class="form-container">
    <div class="user-photo">
      <h2>Pelo o que você se interessa?</h2>
      <div :class="'photo'"></div>
    </div>
    <div class="md-layout md-gutter md-alignment-center">
      <md-card v-for="event in events" class="card" md-with-hover>
        <md-card-header>
          <md-checkbox v-model="interests" :value="event.id" class="default md-title">{{event.name}}</md-checkbox>
          <!-- <div class="md-title">{{event.name}}</div> -->
        </md-card-header>
      </md-card>
    </div>
    <!-- <div class="md-layout md-alignment-center-center">
      <md-progress-bar md-mode="determinate" :md-value="amount"></md-progress-bar>
    </div> -->
    <div class="register-footer md-layout md-alignment-center-center">
      <md-button type="button" class="smbr-black" @click.prevent="enter">Entrar</md-button>
    </div>
  </form>
</template>

<script>
export default {
  name: 'registerFormStepTwo',
  data() {
    return {
      interests: [],
      amount: 50,
      events: [],
      user: null
    }
  },
  methods: {
    fetchEvents() {
      this.$http.get('events.json').then( (response) => {
        this.events = response.body
        console.log(this.events)
      });
    },
    getStepOneData() {
      this.user = this.$store.getters.getUser;
      console.log(this.user)
    },
    enter() {
      this.user.interests = this.interests;
      console.log(this.user);
    }
  },
  created() {
    this.getStepOneData();
    this.fetchEvents();
  }
}
</script>

<style lang="scss">
  .md-checkbox {
    display: flex;

    &.md-checked {
      .md-checkbox-container {
        background-color: white;

        &:after {
          border-color: black;
        }
      }
    }
  }

  .md-checkbox-container {
    border: 1px solid #d2d2d2 !important;
  }
  
  .form-container {
    width: 80%;
    margin: auto;
    height: calc(100% - 15vh);
    text-align: center;

    .card {
      margin: 10px;
    }

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

  input, .select {
    border-bottom: 1px solid #d2d2d2 !important;
  }

  .md-menu-content-container {
    background: #fff !important;
  }

</style>
