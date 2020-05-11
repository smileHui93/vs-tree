import Vue from 'vue'
import App from './App.vue'
import MobileTree from "../lib/vue-mobile-tree.umd"
import "../lib/vue-mobile-tree.css";
Vue.use(MobileTree);

Vue.config.productionTip = false

new Vue({
  render: h => h(App),
}).$mount('#app')
