import {FaArrowsAlt, FaLayerGroup, FaHandPaper, FaArrowsAltV, FaArrowsAltH, FaWindowRestore, FaSearchPlus, FaCompressAlt} from 'react-icons/fa';

export default [
    {
        title: 'Movable',
        path: '/movable',
        icon: FaArrowsAlt,
        description: '&lt;Movable/&gt; is a React component that can be used to create elements that the user can move.',
    },
    {
        title: 'Scalable',
        path: '/scalable',
        icon: FaSearchPlus,
        description: '&lt;Scalable/&gt; is a React component that can be used to create items that can be scaled in and out.',
    },
    {
        title: 'Collapsible',
        path: '/collapsible',
        icon: FaCompressAlt,
        description: '&lt;Collapsible/&gt; is a React component that allows you to collapse/expand an element with arbitrary content height and apply a nice transition to it.',
    },
    {
        title: 'Stackable',
        path: '/stackable',
        icon: FaLayerGroup,
        description: '&lt;Stackable/&gt; is a React component that can be used to render elements that need to visually appear as if they are "stacked" one of top of the other. This is done through the usage of portals and the Context API.',
    },
    {
        title: 'Scrollable',
        path: '/scrollable',
        icon: FaArrowsAltV,
        description: '&lt;Scrollable/&gt; is a React component that can be used to apply custom scrollbar styling to a scrollable element.',
    },
    {
        title: 'Pannable',
        path: '/pannable',
        icon: FaHandPaper,
        description: '&lt;Pannable/&gt; is a React component that can be used to make content pannable (i.e. capable of being panned) and scrollable in case container\'s size is smaller than size of content.',
    },
    {
        title: 'Resizable',
        path: '/resizable',
        icon: FaArrowsAltH,
        description: '&lt;Resizable/&gt; is a React component that can be used to create elements that the user can resize.',
    },
    {
        title: 'Poppable',
        path: '/poppable',
        icon: FaWindowRestore,
        description: '&lt;Poppable/&gt; is a React component that can be used for creating components that are "popping out" of the screen, like **tooltips, dropdowns, context menus, popovers, modals** and so on.',
    },
];