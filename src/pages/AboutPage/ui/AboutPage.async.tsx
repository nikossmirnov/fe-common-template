import { ComponentType, lazy } from 'react';

const AboutPageAsync = lazy<ComponentType<any>>(() => import('./AboutPage').then(module => ({ default: module.AboutPage })));
export default AboutPageAsync;
