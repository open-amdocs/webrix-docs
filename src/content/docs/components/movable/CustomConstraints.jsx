import React, {useState, useRef} from 'react';
import {Movable} from 'webrix/components';
import './CustomConstraints.scss';

const snapClass = (h, v, cls) => Movable.createConstraint({
    // The 'dependencies' array is used internally for recreating the
    // props when one or more elements in this array has
    // changed (similar to how React's useCallback() dependencies work)
    dependencies: [h, v, cls],

    // The below adds the class given in cls to the movable element
    // Whenever it's on the grid provided by h & v.
    onMove: (e, {ref}, {next}) => {
        const {top, left} = next;
        ref.current.classList.remove(cls);
        if (left % h === 0 || top % v === 0) {
            ref.current.classList.add(cls);
        }
    },
});

export default () => {
    const [position, onMove] = useState({});
    const ref = useRef();
    const {snap} = Movable.Constraints;
    const props = Movable.useMove({ref, onMove, constraints: [snap(50, 50, 0.3), snapClass(50, 50, 'snapped')]});

    return (
        <>
            <div className='grid'/>
            <Movable {...props} style={position}>
                I snap to a 50x50 grid
            </Movable>
        </>
    );
}