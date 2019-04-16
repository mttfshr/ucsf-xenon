import Vue from "vue";
import './plugins/vuetify'
import App from "./App.vue";
import Vuetify from 'vuetify'
import router from "./router";
import colors from 'vuetify/es5/util/colors'

Vue.config.productionTip = false;

new Vue({
  router,
  render: h => h(App)
}).$mount("#app");

Vue.use(Vuetify, {
  theme: {
    primary: '#0c2046',
    secondary: colors.blue-grey,
    accent: colors.light-blue,
    error: colors.red.accent3,
    warning: colors.amber,
    success: colors.teal
  }
})