import React, {useState, useRef} from 'react';
import {Movable} from 'webrix/components';
import './Contained.scss';

export default () => {
    const [position, onMove] = useState({top: 0, left: 0});
    const movable = useRef();
    const container = useRef();
    const {contain} = Movable.Constraints;
    const props = Movable.useMove({position, onMove, constraints: [contain(movable, container)]});

    return (
        <>
            <div className='container' ref={container}/>
            <Movable {...props} className='movable-object' style={position} ref={movable}>
                Move Me!
            </Movable>
        </>
    );
}