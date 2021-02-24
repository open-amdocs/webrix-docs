import React, {useState, useRef} from 'react';
import {Resizable} from 'webrix/components';
import './MinMax.scss';

export default () => {
    const resizable = useRef();
    const [position, setPosition] = useState({});
    const {min, max} = Resizable.Constraints;
    const props = Resizable.useResize({ref: resizable, onResize: setPosition, constraints: [min(100, 100), max(200, 200)]});

    return (
        <div className='resizable-object' style={position} ref={resizable}>
            <Resizable {...props}>
                <Resizable.Resizer.All/>
            </Resizable>
            Resize Me!
        </div>
    );
}