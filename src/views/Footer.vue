<template>
  <div>
    footer.vue
  <v-app>
    <button @click="goBack">BACK</button>
       <v-bottom-navigation
         v-model="value"
         app
         background-color="#F8BB"
         >
         <v-btn value="recent">
           <span>Recent</span>
           <v-icon>mdi-history</v-icon>
         </v-btn>
         <v-btn value="favorites">
           <span>Favorites</span>
           <v-icon>mdi-heart</v-icon>
         </v-btn>
         <v-btn value="nearby" @click="goBack()">
           <span>Nearby</span>
           <v-icon>mdi-map-marker</v-icon>
         </v-btn>
       </v-bottom-navigation>
  </v-app>
  </div>
</template>


<script>
export default {
  methods: {
    goBack() {
      this.$router.back();
    }
  },
  data: () => ({
    value: "nearby"
  }),
  watch: {
    '$route'(to, from) {
      console.log(to.path);
      if (to.path === '/user/1') {
        this.value = 'favorites'
      } else if (to.path === '/') {
        this.value = 'recent'
      }
    }
  }
}
</script>
