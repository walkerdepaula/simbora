<template>
  <div class="event-create">
    <div class="md-layout md-alignment-center-center">
      <h2 class="md-title">Qual vai ser a boa?</h2>
    </div>

    <slick ref="slick" :options="slickOptions">
      <div class="slick-content-wrapper" @click="changeEvent('almoco')">
        <md-content class="md-elevation-1">
          <div class="slick-content-info">
            <div class="md-layout md-alignment-center">
              <img src="https://firebasestorage.googleapis.com/v0/b/hackton-redspark.appspot.com/o/Almoco_icon.svg?alt=media&token=ce4822b2-001a-476d-83e0-109edb6899c1" alt="">
              <strong>Almoço</strong>
            </div>
          </div>
        </md-content>
      </div>
      <div class="slick-content-wrapper" @click="changeEvent('outros')">
        <md-content class="md-elevation-1">
          <div class="slick-content-info">
            <div class="md-layout md-alignment-center">
              <img src="https://firebasestorage.googleapis.com/v0/b/hackton-redspark.appspot.com/o/Outros.svg?alt=media&token=b3217cfd-c693-4e12-ad78-3b9418cdae38" alt="">
              <strong>Outros</strong>
            </div>
          </div>
        </md-content>
      </div>
      <div class="slick-content-wrapper" @click="changeEvent('after')">
        <md-content class="md-elevation-1">
          <div class="slick-content-info">
            <div class="md-layout md-alignment-center">
              <img src="https://firebasestorage.googleapis.com/v0/b/hackton-redspark.appspot.com/o/After%20.svg?alt=media&token=60cb59e4-5852-456c-babb-4430d01431bf" alt="">
              <strong>After</strong>
            </div>
          </div>
        </md-content>
      </div>
    </slick>

    <div class="md-layout md-alignment-center-center">
      <md-button class="create-event" @click="createEvent">Continuar</md-button>
    </div>
  </div>
</template>

<script>
export default {
  name: 'eventCreate',
  data() {
    return {
      eventToCreate: 'almoco',
      slickOptions: {
        centerMode: true,
        centerPadding: '70px',
        slidesToShow: 1,
        arrows:false,
        focusOnSelect: true,
        responsive: [
          {
            breakpoint: 300,
            settings: {
              arrows: true,
              centerMode: true,
              centerPadding: '170px',
              slidesToShow: 1
            }
          }
        ]
      },
    };
  },
  // All slick methods can be used too, example here
  methods: {
      createEvent() {

      },
      changeEvent(newEvent) {
        this.eventToCreate = newEvent
      }
  },
}
</script>

<style lang="scss" scoped>
  .md-title {
    font-family: 'Oswald', sans-serif;
    font-size: 34px;
  }

  .slick-content-wrapper {
    height: 185px;
  }

  .slick-content-info {
    width: 90%;
    display: block;
    margin: auto;
    height: 100%;
  }

  .create-event {
    border-radius: 4px;
    color: white;
    background: #90CAF9;
  }
</style>
