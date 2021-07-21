import React from 'react';
import {Scrollable} from 'webrix/components';
import './CustomScrollbars.scss';

// You can add custom JSX here, like scroll buttons.
const CustomVerticalScrollbar = () => (
    <Scrollable.VerticalScrollbar.Default/>
);

export default () =>  (
    <Scrollable>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
        <Scrollable.VerticalScrollbar>
            <CustomVerticalScrollbar/>
        </Scrollable.VerticalScrollbar>
    </Scrollable>
);