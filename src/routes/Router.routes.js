import React from 'react';
import AsyncRoute from './Route';

export const HOME = {
    name: 'home',
    path: '/',
    component: () => <AsyncRoute file={() => import(/* webpackChunkName: "home" */ './Home/Home')}/>,
};

export const DOCS = {
    name: 'docs',
    path: '/docs',
    component: () => <AsyncRoute file={() => import(/* webpackChunkName: "docs" */ './Docs/Docs')}/>,
};

export const TUTORIAL = {
    name: 'tutorial',
    path: '/tutorial',
    component: () => <AsyncRoute file={() => import(/* webpackChunkName: "tutorial" */ './Tutorial/Tutorial')}/>,
};

export const PLAYGROUND = {
    name: 'playground',
    path: '/playground',
    component: () => <AsyncRoute file={() => import(/* webpackChunkName: "tutorial" */ './Playground/Playground')}/>,
};

export default [
    DOCS,
    TUTORIAL,
    PLAYGROUND,
    HOME,
];