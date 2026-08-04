import Vue from '@vue/compat/dist/vue.esm-bundler.js'
import App from './App.vue'

Vue.config.productionTip = false

new Vue({
  render: h => h(App),
}).$mount('#app')
