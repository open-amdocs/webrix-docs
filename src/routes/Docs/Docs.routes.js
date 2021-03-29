import introduction from 'content/docs/introduction/introduction.routes';
import components from 'content/docs/components/components.routes';
import hooks from 'content/docs/hooks/hooks.routes';
import tools from 'content/docs/tools/tools.routes';

export default [
    {
        title: 'Introduction',
        path: '/introduction',
        routes: introduction,
    },
    {
        title: 'Components',
        path: '/components',
        routes: components,
    },
    {
        title: 'Hooks',
        path: '/hooks',
        routes: hooks,
    },
    {
        title: 'Tools',
        path: '/tools',
        routes: tools,
    },
];