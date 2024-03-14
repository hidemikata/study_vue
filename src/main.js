import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import apolloProvider from './vue-apollo'
import VueApollo from 'vue-apollo';
import cognito from './cognito'

Vue.config.productionTip = false
new Vue({
  cognito,
  apolloProvider,
  router,
  store,
  render: function (h) { return h(App) }
}).$mount('#app')


