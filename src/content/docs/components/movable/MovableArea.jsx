import React, {useState, useRef} from 'react';
import {Movable} from 'webrix/components';
import './MovableArea.scss';

const {trackpad, update} = Movable.Operations;

export default () => {
    const [position, setPosition] = useState({left: 125, top: 125});
    const movable = useRef();
    const props = Movable.useMove([
        trackpad(movable),
        update(setPosition),
    ]);

    return (
        <Movable {...props} ref={movable}>
            <div className='handle' style={position}/>
        </Movable>
    );
};