import React from 'react';
import {Zoomable} from 'webrix';
import './BasicExample.scss';

export default () =>  (
    <React.Fragment>
        <Zoomable zoom={0.5}>Scale x0.5</Zoomable>
        <Zoomable zoom={1}>Scale x1</Zoomable>
        <Zoomable zoom={1.5}>Scale x1.5</Zoomable>
        <Zoomable zoom={2}>Scale x2</Zoomable>
    </React.Fragment>
);