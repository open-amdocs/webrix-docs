import React, {useState, useRef} from 'react';
import {Scalable, Pannable, Movable} from 'webrix/components';
import img from './image.jpeg';
import './style.scss';

const {trackpad, update, transform} = Movable.Operations;
const {map} = Movable.Transformers;

const MIN = 0.5, MAX = 1.5;

const Slider = ({value, onChange}) => {
    const movable = useRef();
    const position = `${map(MIN, MAX, 0, 90)(value)}%`; // 90 so the handle doesn't go beyond the track
    const props = Movable.useMove([
        trackpad(movable),
        transform(v => v.top, map(0, 100, MIN, MAX)),
        update(onChange),
    ]);

    return (
        <Movable className='slider' ref={movable} {...props}>
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