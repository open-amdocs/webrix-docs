import React, {useState, useRef} from 'react';
import {Resizable} from 'webrix/components';
import './Snapping.scss';

const {resize, snap, lock, update} = Resizable.Operations;

export default () => {
    const [position, setPosition] = useState({});
    const resizable = useRef();

    const props = Resizable.useResize([
        resize(resizable),
        snap(20, 20),
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