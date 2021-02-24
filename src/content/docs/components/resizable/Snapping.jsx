import React, {useState, useRef} from 'react';
import {Resizable} from 'webrix/components';
import './Snapping.scss';

export default () => {
    const [position, setPosition] = useState({});
    const resizable = useRef();
    const {snap} = Resizable.Constraints;
    const props = Resizable.useResize({ref: resizable, onResize: setPosition, constraints: [snap(20, 20)]});

    return (
        <div className='resizable-object' style={position} ref={resizable}>
            <Resizable {...props}>
                <Resizable.Resizer.All/>
            </Resizable>
            Resize Me!
        </div>
    );
};