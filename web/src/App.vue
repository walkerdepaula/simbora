<template>
  <div id="app">
    <section>
      <h2>Testando MD</h2>

      <md-card>
        <md-card-header>
          <div class="md-title">Material Design with Vue.js 2 Demo</div>
          <div class="md-subhead">by CodingTheSmartWay.com</div>
        </md-card-header>
        <md-card-content>

          <md-button class="md-raised md-primary" v-on:click="fillTable()">Fill table</md-button>
          <md-button class="md-raised md-primary" v-on:click="clearTable()">Clear table</md-button>
          <br />
          <md-table>
            <md-table-header>
              <md-table-row>
                <md-table-head>First name</md-table-head>
                <md-table-head>Last name</md-table-head>
                <md-table-head>Email</md-table-head>
              </md-table-row>
            </md-table-header>
            <md-table-body>
              <md-table-row v-for="contact in contacts" v-bind:key="contact.id">
                <md-table-cell>{{contact.firstname}}</md-table-cell>
                <md-table-cell>{{contact.lastname}}</md-table-cell>
                <md-table-cell>{{contact.email}}</md-table-cell>
              </md-table-row>
            </md-table-body>
          </md-table>
        </md-card-content>
      </md-card>
    </section>


    <div id="nav">
      <router-link to="/">Home</router-link> |
      <router-link to="/about">About</router-link>
    </div>
    <router-view/>
  </div>
</template>

<style lang="scss">
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
#nav {
  padding: 30px;
  a {
    font-weight: bold;
    color: #2c3e50;
    &.router-link-exact-active {
      color: #42b983;
    }
  }
}
</style>
