<template>
  <div class="md-layout md-gutter md-alignment-center">
    <calendar-list-item
     v-for="item in events"
     :key="item.id"
     :model="item"></calendar-list-item>
  </div>
</template>

<script>
import calendarListItem from './calendar-list-item.vue'

export default {
  name: 'calendarList',
  components: {
    calendarListItem
  },
  data() {
    return {
      events: []
    }
  },
  props: {
    endpointName: {
      type: String,
      required: true
    }
  },
  methods: {
    fetchData() {
      this.$http.get(this.endpointName + '.json').then( (response) => {
        this.events = response.body
      });
    }
  },
  created() {
    this.fetchData();
  }
}
</script>

<style>

</style>
