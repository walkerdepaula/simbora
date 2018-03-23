<template>
<div>
   <div class="phone-viewport">
     <md-bottom-bar md-sync-route>
       <md-bottom-bar-item to="/agenda" md-label="Sua agenda" md-icon="query_builder"></md-bottom-bar-item>
       <md-bottom-bar-item to="/eventos" md-label="SimBora?" md-icon="whatshot"></md-bottom-bar-item>
       <md-bottom-bar-item to="/adicionar-evento" md-label="" md-icon="add_circle"></md-bottom-bar-item>
       <md-bottom-bar-item to="/notificacoes" md-label="Notificações" md-icon="notifications">
         <i class="badge" v-if="newPosts">{{ newPosts }}</i>
       </md-bottom-bar-item>
       <md-bottom-bar-item to="/perfil" md-label="Perfil" md-icon="perm_identity"></md-bottom-bar-item>
     </md-bottom-bar>
   </div>
 </div>
</template>

<style scoped>
  .md-title {
    font-family: 'Oswald', sans-serif;
    font-size: 34px;
  }
</style>