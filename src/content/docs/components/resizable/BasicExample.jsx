import React, {useMemo, useState, useRef} from 'react';
import {Resizable} from 'webrix/components';
import './BasicExample.scss';

const {resize, update, lock} = Resizable.Operations;

export default () => {
    const [position, setPosition] = useState({});
    const resizable = useRef();
    const props = Resizable.useResize(useMemo(() => [
        resize(resizable),
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