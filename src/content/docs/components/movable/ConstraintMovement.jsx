import React, {useState, useRef} from 'react';
import {Movable} from 'webrix/components';
import './ConstraintMovement.scss';

export default () => {
    const [position, onMove] = useState({});
    const ref = useRef();

    return (
        <Movable {...Movable.useMove({ref, onMove})} style={{top: position.top}}>
            I Move Vertically
        </Movable>
    );
};