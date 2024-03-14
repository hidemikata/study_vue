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
    home main vue
  </div>
</template>
<script>
export default {
  data: () => {
    return {
      message: 'hoge',
      counter: 1
    }
  },
  methods:{
    localCountUp: function() {
      this.counter+=1;
    },
    toApollo: function() {
      this.$router.push({path:'/apollo'});
    }
  }
}
</script>
<style>
</style>
