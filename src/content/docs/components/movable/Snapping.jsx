import React, {useState} from 'react';
import {Movable} from 'webrix/components';
import './Snapping.scss';

export default () => {
    const [position, onMove] = useState({top: 0, left: 0});
    const {snap} = Movable.Constraints;
    const props = Movable.useMove({position, onMove, constraints: [snap(60, 60, 0.3)]});

    return (
        <Movable {...props} style={position}>
            I snap to a 20x20 grid
        </Movable>
    );
}