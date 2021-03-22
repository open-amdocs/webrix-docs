import React, {useState, useRef, useMemo} from 'react';
import {Movable} from 'webrix/components';
import './Snapping.scss';

const {move, update, snap} = Movable.Operations;

export default () => {
    const [position, setPosition] = useState({});
    const ref = useRef();
    const props = Movable.useMove(useMemo(() => [
        move(ref),
        snap(20, 20),
        update(setPosition),
    ], []));

    return (
        <Movable {...props} ref={ref} style={position}>
            I snap to a 20x20 grid
        </Movable>
    );
}