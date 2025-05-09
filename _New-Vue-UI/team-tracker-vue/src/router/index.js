import { createRouter, createWebHistory } from "vue-router";
import CoachDashboard from "../views/coach/CoachDashboard.vue";
import CreatePlayer from '../views/coach/CreatePlayer.vue';
import HomeView from "../views/HomeView.vue";

const routes = [
  { path: "/", name: "Home", component: HomeView },
  { path: "/coach", name: "CoachDashboard", component: CoachDashboard },
  { path: "/create-player", name: "CreatePlayer", component: CreatePlayer },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
