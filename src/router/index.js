import Vue from "vue";
import Router from "vue-router";
import Dashboard from "@/views/Dashboard.vue";
import Groups from "@/views/Groups.vue";
import Providers from "@/views/Providers.vue";
import Users from "@/views/Users.vue";
import Profile from "@/views/Profile.vue";

Vue.use(Router);

export default new Router({
  routes: [
    {
      path: "/",
      name: "home",
      component: Dashboard
    },
    {
      path: "/groups",
      name: "groups",
      component: Groups
    },
    {
      path: "/users",
      name: "users",
      component: Users
    },
    {
      path: "/providers",
      name: "providers",
      component: Providers
    },
    {
      path: "/profile",
      name: "profile",
      component: Profile
    }
  ]
});
