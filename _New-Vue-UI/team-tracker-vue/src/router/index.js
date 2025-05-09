import { createRouter, createWebHistory } from "vue-router";
import CoachDashboard from "../views/coach/CoachDashboard.vue";
import HomeView from "../views/HomeView.vue";

const routes = [
  { path: "/", name: "Home", component: HomeView },
  { path: "/coach", name: "CoachDashboard", component: CoachDashboard },
  // Add other routes here
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
