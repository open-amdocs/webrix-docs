import React from 'react';
import {Scalable} from 'webrix/components';
import './BasicExample.scss';

export default () =>  (
    <React.Fragment>
        <Scalable zoomx={0.5} zoomy={0.5}><div className='content'>Scale x0.5</div></Scalable>
        <Scalable zoomx={1} zoomy={1}><div className='content'>Scale x1</div></Scalable>
        <Scalable zoomx={1} zoomy={2}><div className='content'>Scale x1/2</div></Scalable>
        <Scalable zoomx={2} zoomy={1}><div className='content'>Scale x2/1</div></Scalable>
    </React.Fragment>
);