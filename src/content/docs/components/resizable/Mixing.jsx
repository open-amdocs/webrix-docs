import React, {useState, useRef} from 'react';
import {Resizable} from 'webrix/components';
import './MinMax.scss';

export default () => {
    const resizable = useRef();
    const [position, setPosition] = useState({});
    const {min, max, ratio, snap} = Resizable.Constraints;
    const props = Resizable.useResize({
        ref: resizable,
        onResize: setPosition,
        constraints: [
            min(120, 90),
            max(240, 180),
            ratio(4/3),
            snap(120, 90, 0.3),
        ],
    });

    return (
        <div className='resizable-object' style={position} ref={resizable}>
            <Resizable {...props}>
                <Resizable.Resizer.All/>
            </Resizable>
            Resize Me!
        </div>
    );
}