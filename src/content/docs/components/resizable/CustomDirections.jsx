import React, {useState, useRef} from 'react';
import {Resizable} from 'webrix/components';
import './CustomDirections.scss';

export default () => {
    const resizable = useRef();
    const [position, setPosition] = useState({});

    return (
        <div className='resizable-object' style={position} ref={resizable}>
            <Resizable {...Resizable.useResize({ref: resizable, onResize: setPosition})}>
                <Resizable.Resizer.Bottom/>
                <Resizable.Resizer.Right/>
                <Resizable.Resizer.BottomRight/>
            </Resizable>
            I only resize on the bottom/right
            <div className='arrow'/>
        </div>
    );
};