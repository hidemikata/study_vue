<template>
  <div>
    {{userInfo}}
    <button @click="getUserInfo">get user info</button>
  </div>
</template>
<script>
  export default {
  data() {
    return {
      userInfo: "user info"
    };
  },
  methods: {
    getUserInfo () {
      this.$cognito.userInfo();
    }
  }
}
</script>
<style>
</style>
