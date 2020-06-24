import React, {useState, useRef} from 'react';
import {Movable} from 'webrix';
import './BasicExample.scss';

export default () => {

    const [{top, left}, setPosition] = useState({top: 0, left: 0});
    const initial = useRef({top, left});
    const handleOnBeginMove = () => {
        initial.current = {top, left};
    };
    const handleOnMove = ({dx, dy}) => {
        const {top, left} = initial.current;
        setPosition({top: top + dy, left: left + dx});
    };

    return (
        <Movable className='movable-object' style={{top, left}} onBeginMove={handleOnBeginMove} onMove={handleOnMove}>
            Move Me!
        </Movable>
    );
}
