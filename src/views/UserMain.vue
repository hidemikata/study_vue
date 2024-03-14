<template>
  <div>
    user main vue
    {{userId}}
    <h3>user data</h3>
    ---
    <pre>
    {{ apiData.title }}
    </pre>
    ---

    <router-link :to="`/user/${userId}/detail`">
      user page
    </router-link>

    <router-view/>
    user main vue
  </div>
</template>
<script>
import axios from 'axios';
export default {
  data() {
    return {
      userId: this.$route.params.id,
      apiData: ""
    };
  },
  created() {
    console.log('created');
  },
  destroyed() {
    console.log('destroy');
  },
  mounted() {
    console.log('mounted');
    this.fetchData();
  },
  methods: {
    async fetchData() {
      try {
        const response = await axios.get('https://jsonplaceholder.typicode.com/posts/'+ this.userId);
        this.apiData = response.data;
        this.$store.commit('store_user_info', response.data);
      } catch (error) {
        console.error('api error', error);
      }
    }
  }
}
</script>
<style>
</style>
