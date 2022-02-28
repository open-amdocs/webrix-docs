import React, {useState, useRef} from 'react';
import {Resizable} from 'webrix/components';
import './Contain.scss';

const {resize, contain, lock, update} = Resizable.Operations;

export default () => {
    const [position, setPosition] = useState({});
    const resizable = useRef();
    const container = useRef();
    const props = Resizable.useResize([
        resize(resizable),
        contain(container),
        lock(),
        update(setPosition),
    ]);

    return (
        <>
            <div className='container' ref={container}/>
            <div className='resizable-object' style={position} ref={resizable}>
                <Resizable {...props}>
                    <Resizable.Resizer.All/>
                </Resizable>
                Resize Me!
            </div>
        </>
    );
}