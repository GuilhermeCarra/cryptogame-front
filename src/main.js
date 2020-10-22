import Vue from "vue";
import VueRouter from "vue-router";
import { BootstrapVue, BootstrapVueIcons } from "bootstrap-vue";
import App from "./App.vue";
import Home from "./components/Home.vue";
import Ranking from "./components/Ranking.vue";
import Transactions from "./components/Transactions.vue";
import Profile from "./components/Profile.vue";
import Wallet from "./components/Wallet.vue";
import Login from "./components/Login.vue";
import Register from "./components/Register.vue";
import Reset from "./components/Reset.vue";

Vue.use(VueRouter);
Vue.use(BootstrapVue);
Vue.use(BootstrapVueIcons);

const routes = [
  { path: "/", component: Home },
  { path: "/ranking", component: Ranking },
  { path: "/transactions", component: Transactions },
  { path: "/profile", component: Profile },
  { path: "/wallet", component: Wallet },
  { path: "/login", component: Login },
  { path: "/register", component: Register },
  { path: "/reset", component: Reset }
];

const router = new VueRouter({ routes: routes, mode: "history" });

new Vue({
  el: "#app",
  router: router,
  render: h => h(App)
});
