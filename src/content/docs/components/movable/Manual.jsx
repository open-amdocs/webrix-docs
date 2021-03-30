import React, {useState, useCallback} from 'react';
import {Movable} from 'webrix/components';
import './Manual.scss';

export default () => {
    const [{top, left}, setPosition] = useState({top: 0, left: 0});

    const handleOnMove = useCallback(({cx, cy}) => {
        // cx/cy represent the change in x/y since the last event.
        setPosition(({top, left}) => ({top: top + cy, left: left + cx}));
    }, [setPosition]);

    return (
        <Movable style={{top, left}} onMove={handleOnMove}>
            Move Me!
        </Movable>
    );
}