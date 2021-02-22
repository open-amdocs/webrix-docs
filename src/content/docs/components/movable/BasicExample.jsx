import React, {useState, useRef} from 'react';
import {Movable} from 'webrix/components';
import './BasicExample.scss';

export default () => {
    const ref = useRef();
    const [position, onMove] = useState({});
    const props = Movable.useMove({ref, onMove});

    return (
        <Movable {...props} style={position}>
            Move Me!
        </Movable>
    );
}