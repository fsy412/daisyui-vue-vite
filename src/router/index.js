import { createRouter, createWebHistory } from "vue-router"
import Home from "../views/Index.vue"
import Trade from "../views/Trade.vue"

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home,
  },
  {
    path: "/trade",
    name: "trade",
    component: Trade,
  },
]

const router = createRouter({
  history: createWebHistory(),
  routes,
})

export default router
