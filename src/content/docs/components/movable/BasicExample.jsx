import React, {useState, useRef} from 'react';
import {Movable} from 'webrix/components';
import './BasicExample.scss';

export default () => {
    const movable = useRef();
    const [position, onMove] = useState({});

    return (
        <Movable {...Movable.useMove({ref: movable, onMove})} style={position} className='movable-object' ref={movable}>
            Move Me!
        </Movable>
    );
}