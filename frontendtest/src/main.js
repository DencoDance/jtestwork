import Vue from "vue";
import Vuelidate from "vuelidate";
import VeeValidate from "vee-validate";
import App from "./App.vue";
import router from "./router";
import "./registerServiceWorker";
import "bootstrap/dist/css/bootstrap.min.css";
import "@/assets/css/style.css";
import store from "@/store/index.js";

Vue.config.productionTip = false;

Vue.use(Vuelidate);
Vue.use(VeeValidate);

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount("#app");
