import React, {useState, useRef, useMemo} from 'react';
import {Movable} from 'webrix/components';
import './MovableArea.scss';

export default () => {
    const [position, setPosition] = useState({left: 125, top: 125});
    const movable = useRef();
    const {trackpad, update} = Movable.Constraints;
    const props = Movable.useMove(useMemo(() => [
        trackpad(movable),
        update(setPosition),
    ], []));

    return (
        <Movable {...props} ref={movable}>
            <div className='handle' style={position}/>
        </Movable>
    );
};