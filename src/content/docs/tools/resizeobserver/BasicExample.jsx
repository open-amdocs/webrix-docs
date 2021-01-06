import React, {useState} from 'react';
import {ResizeObserver} from 'webrix/tools';
import './BasicExample.scss';

export default () => {
    const [{width, height}, setSize] = useState({width: 0, height: 0});
    return (
        <ResizeObserver onResize={setSize}>
            <div className='resizable-container'>
                <p>Width: {width}px</p>
                <p>Height: {height}px</p>
            </div>
        </ResizeObserver>
    );
};