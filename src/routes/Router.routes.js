import Home from './Home/Home';
import Tutorial from './Tutorial/Tutorial';
import Docs from './Docs/Docs';

export default [
    {
        name: 'docs',
        path: '/docs',
        component: Docs,
    },
    {
        name: 'tutorial',
        path: '/tutorial',
        component: Tutorial,
    },
    {
        name: 'home',
        path: '/',
        component: Home,
    },
];