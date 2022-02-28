import React, {useState, useRef} from 'react';
import {Resizable} from 'webrix/components';
import './Mixing.scss';

const {resize, min, max, ratio, snap, lock, update} = Resizable.Operations;

export default () => {
    const resizable = useRef();
    const [position, setPosition] = useState({});
    const props = Resizable.useResize([
        resize(resizable),
        min(120, 90),
        max(240, 180),
        ratio(4/3),
        snap(120, 90, 0.3),
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
}