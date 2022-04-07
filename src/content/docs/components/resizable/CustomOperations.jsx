import React, {useState, useRef} from 'react';
import {Resizable} from 'webrix/components';
import './CustomOperations.scss';

const {resize, snap, lock, update, createOperation} = Resizable.Operations;

const snapClass = (ref, h, v, cls) => createOperation({
    // The below adds the class given in cls to the movable element
    // Whenever it's on the grid provided by h & v.
    onResize: (e, {next}) => {
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
    const props = Resizable.useResize([
        resize(resizable),
        snap(50, 50, 0.3),
        snapClass(resizable, 50, 50, 'snapped'),
        lock(),
        update(setPosition),
    ]);

    return (
        <div className='resizable-object' style={position} ref={resizable}>
            <Resizable {...props}>
                <Resizable.Resizer.All/>
            </Resizable>
            Resize Me!
        </div>
    );
};