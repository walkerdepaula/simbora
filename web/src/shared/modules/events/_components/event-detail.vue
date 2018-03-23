<template>
  <div class="event-detail">
    <div class="event-detail-body md-alignment-top-center">
        <md-card class="event-card">
        <md-card-media>
            <div class="event-image"></div>
        </md-card-media>

        <md-card-header>
            <div class="md-title">{{event.title}}</div>
            <div class="md-subhead">{{event.place}}</div>
        </md-card-header>

        <md-card-content>
            <div class="infos">
                <p>{{event.description}}</p>
                <span>{{event.date}}</span>
                <span>{{event.hour}}</span>
            </div>

            <h3>Quem vai?</h3>
            <div class="people" v-for="person in event.people">

            </div>
        </md-card-content>
        <div class="letsGo-button-wrapper md-alignment-center-center">
            <md-button type="button" class="letsGo" @click.prevent="letsGo">SimBora!</md-button>

        </div>
        </md-card>
    </div>

  </div>
</template>

<script>
export default {
  name: 'EventDetail',
  components: {},

  data() {
    return {
        event: {
            title: "aloooou",
            place: "Redspark sp",
            description: "asdhaiush asuidhaiu sdhuiaasd iuash duiadiuahsui adushd ajisdio asdoaodhsoa",
            date: "Fry, May 12 2017",
            hour: "13 30 PM",
            people: [
                {
                    name: 'Jorge', image: null
                },
                {
                    name: 'Walker', image: null
                },
                {
                    name: 'Eu', image: null
                }
            ]
        }
    }
  },
  methods: {
      letsGo(){
          console.log(this.event);
      }
  },

  created() {}

}
</script>

<style scoped lang="scss">
  .event-detail {
    height: calc(95vh - 20px);
  }

    .event-image {
        background-image: url(../../../../assets/login1.png);
        background-position: center center;
        background-size: cover; 
        background-repeat: no-repeat;
        height: 300px;
    }

  .event-detail-body, .event-card {
      height: 100%;

      img {
          height: 35vh;
      }

    .infos {
        margin-bottom: 30px;
        span {
          margin-right: 20px;
          color: #d2d2d2;
      }
    }

    .people {
        width: 50px;
        height: 50px;
        border-radius: 100%;
        margin-right: 10px;
        border: 1px solid red;
        display: inline-block;
    }

    .letsGo-button-wrapper {
        text-align: center;
    }

    .letsGo {
        width: 20vw;
        background-color: lightblue;
        color: white;
    }
  }
</style>

