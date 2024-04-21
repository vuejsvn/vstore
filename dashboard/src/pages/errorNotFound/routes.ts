export const errorNotFoundRoute = {
  path: '/:catchAll(.*)*',
  component: () => import('./ErrorNotFound.vue'),
}
