import React, {useState, useRef} from 'react';
import {Movable} from 'webrix/components';
import './Mixing.scss';

export default () => {
    const [position, onMove] = useState({});
    const movable = useRef();
    const container = useRef();
    const {snap, contain} = Movable.Constraints;
    const props = Movable.useMove({
        ref: movable,
        onMove,
        constraints: [snap(1, 25), contain(container)],
    });

    return (
        <>
            <div className='container' ref={container}/>
            <Movable {...props} style={position}>
                I snap to a 1x25 grid
            </Movable>
        </>
    );
}