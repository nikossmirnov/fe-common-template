import type { ComponentType } from 'react';
import { lazy } from 'react';

const MainPageAsync = lazy<ComponentType<any>>(() => import('./MainPage').then(module => ({ default: module.MainPage })));

export default MainPageAsync;
 
