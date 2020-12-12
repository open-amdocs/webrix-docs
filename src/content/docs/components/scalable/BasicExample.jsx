import React from 'react';
import {Scalable} from 'webrix/components';
import './BasicExample.scss';

export default () =>  (
    <React.Fragment>
        <Scalable scalex={0.5} scaley={0.5}><div className='content'>Scale x0.5</div></Scalable>
        <Scalable scalex={1} scaley={1}><div className='content'>Scale x1</div></Scalable>
        <Scalable scalex={1} scaley={2}><div className='content'>Scale x1/2</div></Scalable>
        <Scalable scalex={2} scaley={1}><div className='content'>Scale x2/1</div></Scalable>
    </React.Fragment>
);