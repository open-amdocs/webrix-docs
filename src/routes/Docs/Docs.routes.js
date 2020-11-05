import {FaDownload} from 'react-icons/fa';
import components from './content/components/components.routes';
import hooks from './content/hooks/hooks.routes';

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
];