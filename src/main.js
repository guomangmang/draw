import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
import './globalComponents/index'
import 'xe-utils'
import VXETable from 'vxe-table'
import 'vxe-table/lib/style.css'

Vue.use(VXETable)

Vue.config.productionTip = false;
Vue.use(ElementUI)

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount("#app");
