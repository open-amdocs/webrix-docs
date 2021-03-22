import React, {useState, useRef, useMemo} from 'react';
import {Resizable} from 'webrix/components';
import './Ratio.scss';

const {resize, ratio, lock, update} = Resizable.Operations;

export default () => {
    const [position, setPosition] = useState({});
    const resizable = useRef();
    const props = Resizable.useResize(useMemo(() => [
        resize(resizable),
        ratio(4/3),
        lock(),
        update(setPosition),
    ], []));

    return (
        <div className='resizable-object' style={position} ref={resizable}>
            <Resizable {...props}>
                <Resizable.Resizer.All/>
            </Resizable>
            I Maintain a 4:3 ratio
        </div>
    );
}