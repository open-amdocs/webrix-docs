import React, {useState, useRef} from 'react';
import {Resizable} from 'webrix/components';
import './Ratio.scss';

export default () => {
    const [position, onResize] = useState({});
    const resizable = useRef();
    const {ratio} = Resizable.Constraints;
    const props = Resizable.useResize({ref: resizable, onResize, constraints: [ratio(4/3)]});

    return (
        <div className='resizable-object' style={position} ref={resizable}>
            <Resizable {...props}>
                <Resizable.Resizer.All/>
            </Resizable>
            I Maintain a 4:3 ratio
        </div>
    );
}