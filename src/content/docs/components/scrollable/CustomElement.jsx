import React from 'react';
import {Scrollable} from 'webrix/components';
import './CustomElement.scss';

export default () => (
    <Scrollable element={<textarea/>}>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
    </Scrollable>
);