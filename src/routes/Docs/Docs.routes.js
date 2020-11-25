import {FaDownload} from 'react-icons/fa';
import components from 'content/docs/components/components.routes';
import hooks from 'content/docs/hooks/hooks.routes';
import tools from 'content/docs/tools/tools.routes';

export default [
    {
        title: 'Introduction',
        path: '/introduction',
        routes: [
            {
                title: 'Installation',
                path: '/installation',
                icon: FaDownload,
            },
        ],
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