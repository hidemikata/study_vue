<template>
  <div>
    home main vue
    <button @click="localCountUp">coutup
    </button>
    <router-link :to="`/user/${counter}`">
      user page
    </router-link>
    {{counter}}
    <button @click="toApollo">appolo_test</button>
    <p>
    <router-link to="/login">
      login
    </router-link>
    </p>
    <p>
    <router-link to="/logout">
      logout
    </router-link>
    </p>
    <p>
    <router-link to="/vutify">
      vutify
    </router-link>
    </p>
    <v-app>
      <v-container>
      <v-raw>
      <v-btn
        elevation="17"
        @click="toUser1()"
        >to user1
      </v-btn>
      <v-btn
        elevation="17"
        :loading="loadingFlg"
        >button2
      </v-btn>
      </v-raw>
      </v-container>
      <v-btn
        elevation="17"
        color="#B388FF"
        @click="button3Method"
        rounded
        >button3
      </v-btn>

      <v-btn density="compact" con="mdi-plus">aa</v-btn>
  
      <v-btn
        icon
        color="pink"
      >
        <v-icon>mdi-heart</v-icon>
      </v-btn>
    
    
      <v-btn
        icon
        disabled
      >
        <v-icon>mdi-heart</v-icon>
      </v-btn>
    
 
    </v-app>
    
    home main vue
    
  </div>
</template>
<script>
export default {
  data: () => {
    return {
      message: 'hoge',
      counter: 1,
      loadingFlg: true
    }
  },
  methods:{
    localCountUp: function() {
      this.counter+=1;
    },
    toApollo: function() {
      this.$router.push({path:'/apollo'});
    },
    toUser1: function() {
      this.$router.push({path:'/user/1'});
    },
    button3Method: function () {
      this.loadingFlg = !this.loadingFlg;
    }
  }
}
</script>
<style>
</style>
