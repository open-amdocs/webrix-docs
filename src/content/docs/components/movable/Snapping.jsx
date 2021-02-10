import React, {useState, useRef} from 'react';
import {Movable} from 'webrix/components';
import './Snapping.scss';

export default () => {
    const [position, onMove] = useState({});
    const ref = useRef();
    const {snap} = Movable.Constraints;
    const props = Movable.useMove({ref, onMove, constraints: [snap(20, 20)]});

    return (
        <Movable {...props} style={position}>
            I snap to a 20x20 grid
        </Movable>
    );
}