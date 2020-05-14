import Home from './Home/Home';
import Tutorial from './Tutorial/Tutorial';
import Docs from './Docs/Docs';

export const HOME = {
    name: 'home',
    path: '/',
    component: Home,
};

export const DOCS = {
    name: 'docs',
    path: '/docs',
    component: Docs,
};

export const TUTORIAL = {
    name: 'tutorial',
    path: '/tutorial',
    component: Tutorial,
};

export default [
    DOCS,
    TUTORIAL,
    HOME,
];