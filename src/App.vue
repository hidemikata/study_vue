<template>
  <div id="app">
    app.vue
    <router-view name="header"/>
    <router-view/>
    <router-view name="footer"/>
    app.vue 
  </div>
</template>
<script>
export default {
  data: () => {
    return {
    }
  },
  mounted() {
  }
}
</script>
<style>
</style>
