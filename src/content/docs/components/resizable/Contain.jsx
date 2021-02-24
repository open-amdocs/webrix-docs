import React, {useState, useRef} from 'react';
import {Resizable} from 'webrix/components';
import './Contain.scss';

export default () => {
    const [position, setPosition] = useState({});
    const resizable = useRef();
    const container = useRef();
    const {contain} = Resizable.Constraints;
    const props = Resizable.useResize({ref: resizable, onResize: setPosition, constraints: [contain(container)]});
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