import Home from './Home/Home';
import Tutorial from './Tutorial/Tutorial';
import Docs from './Docs/Docs';

export default [
    {
        path: '/docs',
        component: Docs,
    },
    {
        path: '/tutorial',
        component: Tutorial,
    },
    {
        path: '/',
        component: Home,
    },
];