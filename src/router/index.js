import Vue from "vue";
import VueRouter from "vue-router";
import Home from "@/views/Home.vue";
import Register from "@/views/Register.vue";
import Challenge from "@/views/Challenge.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home,
  },
  {
    path: "/register",
    name: "Register",
    component: Register,
  },
  {
    path: "/challenge",
    name: "Challenge",
    component: Challenge,
  },
  /*{
    path: "/",
    name: "Home",
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(/* webpackChunkName: "about"  "../views/Home.vue"),
  },*/
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});

export default router;
