import React, {useState, useRef} from 'react';
import {Movable} from 'webrix/components';
import './BasicExample.scss';

export default () => {
    const ref = useRef();
    const [position, onMove] = useState({});

    return (
        <Movable {...Movable.useMove({ref, onMove})} style={position}>
            Move Me!
        </Movable>
    );
}