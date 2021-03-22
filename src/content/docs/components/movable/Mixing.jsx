import React, {useState, useRef, useMemo} from 'react';
import {Movable} from 'webrix/components';
import './Mixing.scss';

const {move, update, snap, contain} = Movable.Operations;

export default () => {
    const [position, setPosition] = useState({});
    const movable = useRef();
    const container = useRef();
    const props = Movable.useMove(useMemo(() => [
        move(movable),
        snap(1, 25),
        contain(movable, container),
        update(setPosition),
    ], []));

    return (
        <>
            <div className='container' ref={container}/>
            <Movable {...props} ref={movable} style={position}>
                I snap to a 1x25 grid
            </Movable>
        </>
    );
}