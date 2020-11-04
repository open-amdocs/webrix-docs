import React, {useState, useCallback} from 'react';
import {Movable} from 'webrix';
import './BasicExample.scss';

export default () => {
    const [{top, left}, setPosition] = useState({top: 0, left: 0});

    const handleOnMove = useCallback(({cx, cy}) => {
        // cx/cy represent the change in x/y since the last event.
        setPosition(({top, left}) => ({top: top + cy, left: left + cx}));
    }, [setPosition]);

    return (
        <Movable className='movable-object' style={{top, left}} onMove={handleOnMove}>
            Move Me!
        </Movable>
    );
}