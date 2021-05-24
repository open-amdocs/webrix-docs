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

export const BLOG = {
    name: 'blog',
    path: '/blog',
    component: () => <AsyncRoute file={() => import(/* webpackChunkName: "blog" */ './Blog/Blog')}/>,
};

export default [
    DOCS,
    BLOG,
    MOTIVATION,
    EXAMPLES,
    HOME,
];