import { HomePageEnum } from './enums'

export const HomeRoutes = {
  path: '',
  name: HomePageEnum.name,
  component: () => import('./HomePage.vue'),
}
