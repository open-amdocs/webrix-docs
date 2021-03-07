import React, {useState, useRef} from 'react';
import {Resizable} from 'webrix/components';
import './CustomConstraints.scss';

const snapClass = (h, v, cls) => Resizable.createConstraint({
    // The 'dependencies' array is used internally for recreating the
    // props when one or more elements in this array has
    // changed (similar to how React's useCallback() dependencies work)
    dependencies: [h, v, cls],

    // The below adds the class given in cls to the movable element
    // Whenever it's on the grid provided by h & v.
    onResize: (e, {ref}, {next}) => {
        const {width, height} = next;
        ref.current.classList.remove(cls);
        if (width % h === 0 || height % v === 0) {
            ref.current.classList.add(cls);
        }
    },
});

export default () => {
    const [position, setPosition] = useState({});
    const resizable = useRef();
    const {snap} = Resizable.Constraints;
    const props = Resizable.useResize({
        ref: resizable,
        onResize: setPosition,
        constraints: [snap(50, 50, 0.3), snapClass(50, 50, 'snapped')],
    });

    return (
        <div className='resizable-object' style={position} ref={resizable}>
            <Resizable {...props}>
                <Resizable.Resizer.All/>
            </Resizable>
            Resize Me!
        </div>
    );
};