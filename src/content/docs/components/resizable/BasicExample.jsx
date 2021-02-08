import React, {useState, useRef} from 'react';
import {Resizable} from 'webrix/components';
import './BasicExample.scss';

export default () => {
    const [position, setPosition] = useState({});
    const resizable = useRef();

    return (
        <div className='resizable-object' style={position} ref={resizable}>
            <Resizable {...Resizable.useResize({ref: resizable, onResize: setPosition})}>
                <Resizable.Resizer.All/>
            </Resizable>
            Resize Me!
        </div>
    );
}