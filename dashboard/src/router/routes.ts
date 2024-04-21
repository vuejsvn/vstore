import { errorNotFoundRoute } from 'pages/errorNotFound'
import { HomeRoutes } from 'pages/home'
import { RouteRecordRaw } from 'vue-router'

const routes: RouteRecordRaw[] = [
  {
    path: '/',
    component: () => import('layouts/MainLayout.vue'),
    children: [HomeRoutes],
  },

  // Always leave this as last one,
  // but you can also remove it
  errorNotFoundRoute,
]

export default routes
