import React, {useState, useCallback, useRef} from 'react';
import {Movable} from 'webrix';

const snap = num => {
    const GRID_SIZE = 20;
    return Math.round(num / GRID_SIZE) * GRID_SIZE;
};

export default () => {
    const [{top, left}, setPosition] = useState({top: 0, left: 0});
    const initial = useRef({top, left});

    const handleOnBeginMove = useCallback(() => {
        initial.current = {top, left};
    }, [top, left]);

    const handleOnMove = useCallback(({dx, dy}) => {
        // dx/dy represent the change in x/y since the the beginning of the drag.
        const {top, left} = initial.current;
        setPosition({top: snap(top + dy), left: snap(left + dx)});
    }, [setPosition, initial.current]);

    return (
        <Movable className='movable-object' style={{top, left}} onBeginMove={handleOnBeginMove} onMove={handleOnMove}>
            I snap to a 20x20 grid
        </Movable>
    );
}