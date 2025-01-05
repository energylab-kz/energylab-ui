import { createApp } from "vue";
import { createRouter, createWebHistory } from "vue-router";

import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.min.js";
import "bootstrap";
// import "./style.css";

import App from "./App.vue";
import HomeView from "./views/HomeView.vue";
import ProjectView from "./views/ProjectView.vue";

const routes = [
  { path: "/", component: HomeView },
  { path: "/projects/:title", component: ProjectView },
];

const router = createRouter({
  history: createWebHistory(),
  routes: routes,
});

createApp(App).use(router).mount("#app");
