<template>
  <div>
    footer.vue
    <button @click="goBack">BACK</button>
  </div>
</template>


<script>
export default {
  methods: {
    goBack() {
      this.$router.back();
    }
  }
}
</script>
