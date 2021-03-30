import React, {useState, useCallback} from 'react';
import {Resizable} from 'webrix/components';
import './CustomHandlers.scss';

export default () => {
    const SIZE = 100;
    const INITIAL = {top: (window.innerHeight - SIZE) / 2, left: (window.innerWidth - SIZE) / 2, width: SIZE, height: SIZE};
    const [position, setPosition] = useState(INITIAL);

    const handleOnResize = useCallback(({change}) => {
        setPosition(({top, left, width, height}) => ({
            top: top + change.top,
            left: left + change.left,
            width: width + change.width,
            height: height + change.height,
        }));
    }, [setPosition]);

    return (
        <div className='resizable-object' style={position}>
            <Resizable onResize={handleOnResize}>
                <Resizable.Resizer.All/>
            </Resizable>
            Resize Me!
        </div>
    );
}