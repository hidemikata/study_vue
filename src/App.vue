<template>
  <div>
    <v-app id="inspire">
      <v-navigation-drawer
        v-model="drawer"
        app
      >
        <!--  -->
      </v-navigation-drawer>
  
      <v-app-bar app>
        <v-app-bar-nav-icon @click="drawer = !drawer"></v-app-bar-nav-icon>
  
        <v-toolbar-title>Application</v-toolbar-title>
      </v-app-bar>
  
      <v-main>
      <router-view/>
      <router-view name="footer"/>
      </v-main>
  </v-app>
  </div>
</template>

<script>

export default {
  name: 'App',
  data: () => ({
    drawer: null,
  }),
};
</script>
