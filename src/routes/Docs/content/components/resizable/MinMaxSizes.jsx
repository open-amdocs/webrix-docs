import React, {useState, useCallback} from 'react';
import {Resizable} from 'webrix';
import './style.scss';

const clamp = (min, max, value) => (
    Math.min(max, Math.max(min, value))
);

export default () => {
    const MIN = 100, MAX = 200;
    const INITIAL = {top: (window.innerHeight - MIN) / 2, left: (window.innerWidth - MIN) / 2, width: MIN, height: MIN};
    const [position, setPosition] = useState(INITIAL);

    const handleOnResize = useCallback(({change}) => {
        setPosition(({top, left, width, height}) => ({
            top: clamp(top - (MAX - height), top + (height - MIN), top + change.top),
            left: clamp(left - (MAX - width), left + (width - MIN), left + change.left),
            width: clamp(MIN, MAX, width + change.width),
            height: clamp(MIN, MAX, height + change.height),
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