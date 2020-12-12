import React from 'react';
import {Zoomable} from 'webrix/components';
import './BasicExample.scss';

export default () =>  (
    <React.Fragment>
        <Zoomable zoomx={0.5} zoomy={0.5}><div className='content'>Scale x0.5</div></Zoomable>
        <Zoomable zoomx={1} zoomy={1}><div className='content'>Scale x1</div></Zoomable>
        <Zoomable zoomx={1} zoomy={2}><div className='content'>Scale x1/2</div></Zoomable>
        <Zoomable zoomx={2} zoomy={1}><div className='content'>Scale x2/1</div></Zoomable>
    </React.Fragment>
);