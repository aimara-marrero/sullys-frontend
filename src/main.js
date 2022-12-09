
import Vue from 'vue'
import App from './App.vue'
import vuetify from './plugins/vuetify'

//import {createPinia, PiniaVuePlugin} from 'pinia'
//Vue.use(PiniaVuePlugin)
//const pinia = createPinia()

Vue.config.productionTip = false
import router from './router'


new Vue({
  router,
  vuetify,
  //pinia,
  render: h => h(App)
}).$mount('#app')
