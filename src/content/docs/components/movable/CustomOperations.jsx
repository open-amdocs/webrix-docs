import React, {useState, useRef, useMemo} from 'react';
import {Movable} from 'webrix/components';
import './CustomOperations.scss';

const {move, update, snap} = Movable.Operations;

const snapClass = (ref, h, v, cls) => Movable.Operations.createOperation({
    // The below adds the class given in cls to the movable element
    // Whenever it's on the grid provided by h & v.
    onMove: (e, {next}) => {
        const {top, left} = next;
        ref.current.classList.remove(cls);
        if (left % h === 0 || top % v === 0) {
            ref.current.classList.add(cls);
        }
    },
});

export default () => {
    const [position, setPosition] = useState({});
    const ref = useRef();
    const props = Movable.useMove(useMemo(() => [
        move(ref),
        snap(50, 50, 0.3),
        snapClass(ref, 50, 50, 'snapped'),
        update(setPosition),
    ], []));

    return (
        <>
            <div className='grid'/>
            <Movable {...props} ref={ref} style={position}>
                I snap to a 50x50 grid
            </Movable>
        </>
    );
}