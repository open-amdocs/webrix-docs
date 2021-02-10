import React, {useState} from 'react';
import {Movable} from 'webrix/components';
import './ConstraintMovement.scss';

export default () => {
    const [position, onMove] = useState({top: 0, left: 0});

    return (
        <Movable {...Movable.useMove({position, onMove})} style={{top: position.top}}>
            I Move Vertically
        </Movable>
    );
};