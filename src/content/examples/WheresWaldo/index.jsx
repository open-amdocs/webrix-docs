import React, {useCallback, useState, useRef} from 'react';
import {Scalable, Pannable, Movable} from 'webrix/components';
import img from './image.jpeg';
import './style.scss';

const MIN = 0.5, MAX = 1.5;

const Slider = ({value, onChange}) => {
    const movable = useRef();
    const position = `${(value - MIN) / (MAX - MIN) * 90}%`; // 90 so the handle doesn't go beyond the track
    const onMove = useCallback(({top}) => {
        onChange(() => MIN + (top / 100) * (MAX - MIN));
    }, [onChange]);
    const props = Movable.useMoveArea({ref: movable, onMove});

    return (
        <Movable className='slider' {...props}>
            <div className='value'>{Math.round(value * 100)}%</div>
            <div className='handle' style={{top: position}}/>
        </Movable>
    );
};

export default () => {
    const [scale, setScale] = useState(0.75);

    return (
        <div className='image-container'>
            <Slider value={scale} onChange={setScale}/>
            <Pannable>
                <Scalable scalex={scale} scaley={scale}>
                    <img src={img}/>
                </Scalable>
            </Pannable>
        </div>
    );
};