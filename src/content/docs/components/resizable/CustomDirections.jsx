import React, {useState, useRef} from 'react';
import {Resizable} from 'webrix/components';
import './CustomDirections.scss';

const {update, lock, resize} = Resizable.Operations;

export default () => {
    const resizable = useRef();
    const [position, setPosition] = useState({});

    return (
        <div className='resizable-object' style={position} ref={resizable}>
            <Resizable {...Resizable.useResize([resize(resizable), lock(), update(setPosition)])}>
                <Resizable.Resizer.Bottom/>
                <Resizable.Resizer.Right/>
                <Resizable.Resizer.BottomRight/>
            </Resizable>
            I only resize on the bottom/right
            <div className='arrow'/>
        </div>
    );
};