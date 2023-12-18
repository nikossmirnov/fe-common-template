import { RouteProps } from 'react-router-dom';
import { AboutPage } from '@/pages/AboutPage';
import { MainPage } from '@/pages/MainPage';

export enum RouteNames {
  HOME = 'home',
  ABOUT = 'about',
}

export const RoutePath: Record<RouteNames, string> = {
  [RouteNames.HOME]: '/',
  [RouteNames.ABOUT]: '/about',
};

export const routerConfig: Record<RouteNames, RouteProps> = {
  [RouteNames.HOME]: {
    path: RoutePath[RouteNames.HOME],
    element: MainPage,
  },
  [RouteNames.ABOUT]: {
    path: RoutePath[RouteNames.ABOUT],
    element: AboutPage,
  },
};
