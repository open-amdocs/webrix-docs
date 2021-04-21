import React, {useState, useRef, useMemo} from 'react';
import {Movable} from 'webrix/components';
import './CustomOperations.scss';

const {move, update} = Movable.Operations;

// This operation adds a class name when the element is being moved.
// We use this to apply CSS that makes it look like the element is "lifted" from the screen.
export const classname = (ref, cls) => Movable.Operations.createOperation({
    onBeginMove: () => ref.current.classList.add(cls),
    onEndMove: () => ref.current.classList.remove(cls),
});

// This operation snaps the element to a 50x50 grid, but only when it is  dropped.
export const snapOnDrop = setPosition => Movable.Operations.createOperation({
    onEndMove: (e, shared) => {
        const {top, left} = shared.next;
        const GRID = 50;
        setPosition({
            top: Math.round(top / GRID) * GRID,
            left: Math.round(left / GRID) * GRID,
        })
    },
});

export default () => {
    const [position, setPosition] = useState({});
    const ref = useRef();
    const props = Movable.useMove(useMemo(() => [
        move(ref),
        classname(ref, 'moving'),
        update(setPosition),
        snapOnDrop(setPosition),
    ], []));

    return (
        <>
            <div className='grid'/>
            <Movable {...props} ref={ref} style={position}>
                Pick me up!
            </Movable>
        </>
    );
}