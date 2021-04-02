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

export const MOTIVATION = {
    name: 'motivation',
    path: '/motivation',
    component: () => <AsyncRoute file={() => import(/* webpackChunkName: "motivation" */ './Motivation/Motivation')}/>,
};

export const EXAMPLES = {
    name: 'examples',
    path: '/examples',
    component: () => <AsyncRoute file={() => import(/* webpackChunkName: "examples" */ './Examples/Examples')}/>,
};

export default [
    DOCS,
    MOTIVATION,
    EXAMPLES,
    HOME,
];