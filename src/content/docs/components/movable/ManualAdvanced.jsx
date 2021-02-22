import React, {useState, useCallback, useRef} from 'react';
import {Movable} from 'webrix/components';
import './ManualAdvanced.scss';

export default () => {
    const [{top, left}, setPosition] = useState({top: 0, left: 0});
    const initial = useRef({top, left});

    const handleOnBeginMove = useCallback(() => {
        initial.current = {top, left};
    }, [top, left]);

    const handleOnMove = useCallback(({dx, dy}) => {
        // dx/dy represent the change in x/y since the the beginning of the drag.
        const {top, left} = initial.current;
        setPosition({top: top + dy, left: left + dx});
    }, [setPosition, initial.current]);

    return (
        <Movable style={{top, left}} onBeginMove={handleOnBeginMove} onMove={handleOnMove}>
            Move Me!
        </Movable>
    );
}