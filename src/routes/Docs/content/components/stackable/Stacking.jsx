import React from 'react';
import {Stackable} from 'webrix';
import './Stacking.scss';

export default () => (
    <Stackable className='stacking'>
        <Stackable className='stacking'>
            <Stackable className='stacking'/>
        </Stackable>
    </Stackable>
);