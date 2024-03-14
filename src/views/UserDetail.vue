<template>
  <div>
    user detail vue
    id={{id}}
    <p>
    <h3>
    {{userInfo.title}}
    </h3>
    {{userInfo.body}}
    </p>
    user dtail vue
  </div>
</template>
<script>
  export default {
  props: ['id'],
  data() {
    return {
      userInfo: ""
    };
  },
  mounted(){
    this.userInfo = this.$store.getters.user_info
  }
}
</script>
<style>
</style>
