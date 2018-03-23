<template>
  <md-card class="card-wrapper md-elevation-5" @click.prevent="accessEventInfo">
    <md-card-media>
      <img :src="'https://firebasestorage.googleapis.com/v0/b/hackton-redspark.appspot.com/o/almoco.svg?alt=media&token=c651402c-3d77-4277-984a-ad74b4dde399'">
    </md-card-media>

    <md-card-header>
      <div class="md-layout md-gutter">
        <div class="md-layout-item">
          <div class="md-title">{{ model.title }}</div>
          <div class="subsubhead">{{ model.companny }}</div>
          <div class="md-subhead">{{ getDate(model.when) }}</div>
        </div>

        <div class="md-layout-item right-header">
          <div class="card-status">{{ model.status }}</div>
          <div class="md-subhead">{{ getTime(model.when) }}</div>
        </div>
      </div>
    </md-card-header>

    <md-card-expand>
      <md-card-actions md-alignment="space-between">
        <div>
          <md-button type="button"
          v-if="showButtonConfirmation()"
          @click="confirm">Confirmar</md-button>
        </div>

        <md-card-expand-trigger>
          <md-button>
            Descrição
            <md-icon class="icon">keyboard_arrow_down</md-icon>
          </md-button>
        </md-card-expand-trigger>
      </md-card-actions>

      <md-card-expand-content>
        <md-card-content>
          {{ model.description }}
        </md-card-content>
      </md-card-expand-content>
    </md-card-expand>
  </md-card>
</template>

<script>

export default {
  name: 'calendarListItem',
  props: {
    model: {
      type: Object,
      required: true
    }
  },
  methods: {
    getDate(dateTime) {
      return moment(dateTime, 'DD/MM/YYYY').format('DD/MM/YYYY')
    },
    getTime(dateTime) {
      return moment(dateTime, 'DD/MM/YYYY HH:mm').format('HH:mm')
    },
    confirm() {
      console.log(this.model.id)
    },
    showButtonConfirmation() {
      return this.model.status !== 'Confirmado'
    },
    accessEventInfo() {
      console.log(this.model.id)
    }
  }
}
</script>

<style scoped lang="scss">
  .card-wrapper {
    margin: 20px;
    max-width: 350px;
  }
  .right-header {
    text-align: right;
  }
  .subsubhead {
    opacity: 0.34;
    font-size: 12px;
    letter-spacing: .01em;
    line-height: 20px;
  }
  .card-status {
    font-size: 20px;
    margin-top: 12px;
    color: #00982a;
    margin-bottom: 20px;
  }
  .md-title {
    font-family: 'Oswald', sans-serif;
  }
</style>
