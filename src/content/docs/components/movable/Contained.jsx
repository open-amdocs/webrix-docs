import React, {useState, useRef} from 'react';
import {Movable} from 'webrix/components';
import './Contained.scss';

export default () => {
    const [position, onMove] = useState({});
    const movable = useRef();
    const container = useRef();
    const {contain} = Movable.Constraints;
    const props = Movable.useMove({ref: movable, onMove, constraints: [contain(container)]});

    return (
        <>
            <div className='container' ref={container}/>
            <Movable {...props} style={position}>
                Move Me!
            </Movable>
        </>
    );
}