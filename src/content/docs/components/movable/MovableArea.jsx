import React, {useState, useRef} from 'react';
import {Movable} from 'webrix/components';
import './MovableArea.scss';

export default () => {
    const [position, onMove] = useState({left: 125, top: 125});
    const movable = useRef();
    const props = Movable.useMoveArea({ref: movable, onMove});

    return (
        <Movable {...props}>
            <div className='handle' style={position}/>
        </Movable>
    );
};