import React, {useState, useEffect, useRef} from 'react';
import {useBoundingRectObserver} from 'webrix/hooks';
import './BasicExample.scss';

export default () => {
    const ref = useRef();
    const [rect, setRect] = useState({});
    const {start} = useBoundingRectObserver(rect => {
        setRect(rect);
    }, ref);
    useEffect(() => {start()}, []);

    return (
        <>
            <div className='rect-info'>
                <p>Width: {rect.width?.toFixed(1)}</p>
                <p>Height: {rect.height?.toFixed(1)}</p>
                <p>Top: {rect.top?.toFixed(1)}</p>
                <p>Left: {rect.left?.toFixed(1)}</p>
            </div>
            <div className='moving-resizing-element' ref={ref}/>
        </>
    );
};