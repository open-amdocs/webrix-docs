import React, {useState, useCallback} from 'react';
import {Movable} from 'webrix/components';
import './ConstraintMovement.scss';

export default () => {
    const [{top, left}, setPosition] = useState({top: 0, left: 0});

    const handleOnMove = useCallback(({cy}) => {
        // We only update the y axis
        setPosition(({top}) => ({top: top + cy}));
    }, [setPosition]);

    return (
        <Movable className='movable-object' style={{top, left}} onMove={handleOnMove}>
            I Move Vertically
        </Movable>
    );
}