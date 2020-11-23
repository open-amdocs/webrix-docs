import React from 'react';
import {Scrollable} from 'webrix/components';
import './MinimalThumbSize.scss';

export default () =>  (
    <>
        <div>
            Small scrollbar
            <div className='left-scrollable'>
                <Scrollable>
                    <div className='very-long-content'/>
                </Scrollable>
            </div>
        </div>
        <div>
            Long scrollbar
            <div className='right-scrollable'>
                <Scrollable>
                    <div className='long-content'/>
                </Scrollable>
            </div>
        </div>
    </>
);