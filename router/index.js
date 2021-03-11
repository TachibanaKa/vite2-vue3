import { createRouter, createWebHashHistory } from "vue-router";
import App from "../src/App.vue";
import Demo from "../src/components/HelloWorld.vue";

const routes = [
  { path: "/", component: App },
  { name: "/demo", path: "/demo", component: Demo },
];
const router = createRouter({
  history: createWebHashHistory(),
  routes,
});
export default router;