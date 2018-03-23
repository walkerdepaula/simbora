<template>
  <div>
    <div class="md-layout md-alignment-center">
      <md-field class="filter-events">
        <md-select v-model="filter" name="filter" id="filter">
          <md-option value="getAllEvents">Com todos os eventos</md-option>
          <md-option value="getFriendEvents">Com eventos criados por terceiros</md-option>
          <md-option value="getMyEvents">Com eventos criados por mim</md-option>
        </md-select>
      </md-field>
    </div>

    <div class="md-layout md-gutter md-alignment-center">
      <calendar-list-item
      v-for="item in events"
      :key="item.id"
      :model="item"></calendar-list-item>
    </div>
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
      events: [],
      allEvents: [],
      myEvents: [],
      friendEvents: [],
      filter: 'getAllEvents'
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
        this.allEvents    = response.body;
        this.myEvents     = response.body.filter( event => event.owner.id == this.user.id )
        this.friendEvents = response.body.filter( event => event.owner.id != this.user.id )

        this.events = response.body
      });
    },
    filterData() {
      if (this.filter === 'getMyEvents') {
        this.events = this.myEvents
      } else if (this.filter === 'getFriendEvents') {
        this.events = this.friendEvents
      } else if (this.filter === 'getAllEvents') {
        this.events = this.allEvents
      }
    }
  },
  computed: {
    user () {
      return this.$store.getters.getUser
    }
  },
  watch: {
    filter: function(val, oldVal){
      this.filterData()
    }
  },
  created() {
    this.fetchData();
  }
}
</script>

<style>
  .filter-events {
    width: 350px;
    margin-bottom: 0px;
  }
  .md-select-menu {
    background: white;
  }
</style>
