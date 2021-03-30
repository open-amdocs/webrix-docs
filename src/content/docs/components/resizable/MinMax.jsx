import React, {useState, useRef, useMemo} from 'react';
import {Resizable} from 'webrix/components';
import './MinMax.scss';

const {resize, update, lock, min, max} = Resizable.Operations;

export default () => {
    const resizable = useRef();
    const [position, setPosition] = useState({});
    const props = Resizable.useResize(useMemo(() => [
        resize(resizable),
        min(100, 100),
        max(200, 200),
        lock(),
        update(setPosition),
    ], []));

    return (
        <div className='resizable-object' style={position} ref={resizable}>
            <Resizable {...props}>
                <Resizable.Resizer.All/>
            </Resizable>
            Resize Me!
        </div>
    );
}