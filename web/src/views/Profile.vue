<template>
  <div class="profile">
    <div class="profile-body md-alignment-top-center">
    <md-tabs >
      <md-tab id="tab-home" md-label="Perfil" >
        <register-data></register-data>
      </md-tab>

      <md-tab id="tab-pages" md-label="Interesses" >
        <register-interests></register-interests>
      </md-tab>
    </md-tabs>
    </div>

  </div>
</template>

<script>
    import registerData from '../shared/modules/register/_components/register-form-step-one.vue';
    import registerInterests from '../shared/modules/register/_components/register-form-step-two.vue';
    export default {
    name: 'Profile',
    components: {
        registerData,
        registerInterests
    },

    data() {
        return {}
    },
    methods: {},

    created() {}

    }
</script>

<style lang="scss">
  .profile {
    height: calc(95vh - 20px);
  }

  .md-tabs.md-alignment-left .md-tabs-navigation {
      width: auto;
      margin: auto;
  }

  .md-button  {
      &.md-theme-default {
          &.md-active {
            border-bottom: 2px solid #000;

          }
      }
  }

  .profile-body, .md-tabs-content, .md-content, .md-tabs, .md-tabs-container {
      height: 100%!important;
  }
</style>

