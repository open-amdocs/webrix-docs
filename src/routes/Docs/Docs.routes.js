import {FaDownload, FaArrowsAlt, FaLayerGroup, FaHandPaper, FaArrowsAltV, FaArrowsAltH, FaWindowRestore, FaSearchPlus, FaCompressAlt} from 'react-icons/fa';

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
        routes: [
            {
                title: 'Movable',
                path: '/movable',
                icon: FaArrowsAlt,
            },
            {
                title: 'Stackable',
                path: '/stackable',
                icon: FaLayerGroup,
            },
            {
                title: 'Pannable',
                path: '/pannable',
                icon: FaHandPaper,
            },
            {
                title: 'Resizable',
                path: '/resizable',
                icon: FaArrowsAltH,
            },
            {
                title: 'Poppable',
                path: '/poppable',
                icon: FaWindowRestore,
            },
            {
                title: 'Zoomable',
                path: '/zoomable',
                icon: FaSearchPlus,
            },
            {
                title: 'Scrollable',
                path: '/scrollable',
                icon: FaArrowsAltV,
            },
            {
                title: 'Collapsible',
                path: '/collapsible',
                icon: FaCompressAlt,
            },
        ],
    },
    {
        title: 'Hooks',
        path: '/hooks',
        routes: [
            {
                title: 'useBooleanState()',
                path: '/usebooleanstate',
            },
            {
                title: 'usePrevious()',
                path: '/useprevious',
            },
            {
                title: 'useMounted()',
                path: '/usemounted',
            },
            {
                title: 'useClickOutside()',
                path: '/useclickoutside',
            },
            {
                title: 'useTimeout()',
                path: '/usetimeout',
            },
            {
                title: 'useDebounce()',
                path: '/usedebounce',
            },
        ],
    },
];