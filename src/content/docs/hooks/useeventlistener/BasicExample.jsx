import React, {useState, useRef} from 'react';
import {useEventListener} from 'webrix/hooks';
import './BasicExample.scss';

const useHover = (ref) => {
    const [hover, setHover] = useState(false);
    useEventListener('mouseenter', () => setHover(true), ref);
    useEventListener('mouseleave', () => setHover(false), ref);
    return hover;
}

export default () => {
    const ref = useRef();
    const hover = useHover(ref);
    return (
        <div className='element' ref={ref}>
            {hover ? 'Hovering' : 'Not Hovering'}
        </div>
    );
};