<template>
  <div class="about">
    <h1>This is an about page</h1>

    <ul>
      <li v-for="user in users" :key="user.name">
        Email: {{ user.email }}
        Nome: {{ user.name }}
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  data() {
    return {
      users: []
    }
  },
  methods: {
    fetchData() {
      this.$http.get('user.json')
        .then( (response) => response.json() )
        .then( (data) => {
          Object.keys(data).forEach( (key) => {
            this.users.push(data[key]);
          });
        });
    }
  },
  created() {
    this.fetchData()
  }
}
</script>

