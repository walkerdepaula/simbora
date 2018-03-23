<template>
  <div class="calendar-container">
    <div class="md-layout md-alignment-center-center">
      <h2 class="md-title">{{ pageTitle }} </h2>
    </div>

    <calendar-list :endpointName="$route.name"></calendar-list>
  </div>
</template>

<script>
import calendarList from '@/shared/modules/calendar/_components/calendar-list.vue';

export default {
  name: 'myCalendar',
  data() {
    return {
      pageTitle: ''
    }
  },
  components: {
    calendarList
  },
  methods: {
    getPageTitle(pageName) {
      return {
        myEvents: 'Sua agenda',
        oldEvents: 'Eventos passados',
        inProgressEvents: 'Eventos que estão para acontecer'
      }[pageName];
    }
  },
  created() {
    this.pageTitle = this.getPageTitle(this.$route.name)
  }
}
</script>

<style scoped>
  .md-title {
    font-family: 'Oswald', sans-serif;
    font-size: 34px;
  }
</style>
