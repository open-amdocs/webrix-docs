import React, {useState, useRef, useMemo} from 'react';
import {Movable} from 'webrix/components';
import './Contain.scss';

const {move, update, contain} = Movable.Operations;

export default () => {
    const [position, setPosition] = useState({});
    const movable = useRef();
    const container = useRef();
    const props = Movable.useMove(useMemo(() => [
        move(movable),
        contain(movable, container),
        update(setPosition),
    ], []));

    return (
        <>
            <div className='container' ref={container}/>
            <Movable {...props} ref={movable} style={position}>
                Move Me!
            </Movable>
        </>
    );
}