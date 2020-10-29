import React, {useState, useCallback, useRef} from 'react';
import {Resizable} from 'webrix';
import './style.scss';

// Math.round() rounds number up, so rounding 1.5 gives 2, while
// rounding -1.5 gives 1. This can cause small glitches when resizing.
// To avoid that we remove the sign before rounding, and then insert it back,
// making the rounding consistent regardless of the sign.
// For more info see https://stackoverflow.com/questions/41586838/rounding-of-negative-numbers-in-javascript
const round = num => (
    Math.sign(num) * Math.round(Math.abs(num))
);

const snap = num => {
    const GRID_SIZE = 20;
    return round(num / GRID_SIZE) * GRID_SIZE;
};

export default () => {
    const SIZE = 100;
    const INITIAL = {top: (window.innerHeight - SIZE) / 2, left: (window.innerWidth - SIZE) / 2, width: SIZE, height: SIZE};
    const [position, setPosition] = useState(INITIAL);
    const initial = useRef({});

    const handleOnBeginResize = useCallback(() => {
        initial.current = position;
    }, [initial, position]);

    const handleOnResize = useCallback(({delta}) => {
        const {top, left, width, height} = initial.current;
        setPosition({
            top: top + snap(delta.top),
            left: left + snap(delta.left),
            width: width + snap(delta.width),
            height: height + snap(delta.height),
        });
    }, [initial, setPosition]);

    return (
        <div className='resizable-object' style={position}>
            <Resizable onBeginResize={handleOnBeginResize} onResize={handleOnResize}>
                <Resizable.Resizer.All/>
            </Resizable>
            Resize Me!
        </div>
    );
}