import React from 'react';
import {Stackable} from 'webrix/components';
import './Stacking.scss';

export default () => (
    <Stackable className='stacking '>
        <Stackable className='stacking'>
            <Stackable className='stacking'/>
        </Stackable>
    </Stackable>
);