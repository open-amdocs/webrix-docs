import React, {useState, useRef, memo} from 'react';
import {Movable} from 'webrix/components';
import {useResizeObserver} from 'webrix/hooks';
import './style.scss';

const {transform, trackpad, update} = Movable.Operations;
const {map, clamp, interval, decimals} = Movable.Transformers;

const Slider = memo(({value, onChange, min, max, step = 1}) => {
    const track = useRef({});
    const {width} = useResizeObserver(track);
    const padding = 10; // Half the size of the handle, to limit the handle movement from going beyond the track
    const position = map(min, max, padding, width - padding)(value);

    const props = Movable.useMove([
        trackpad(track),
        transform(v => v.left, clamp(padding, width - padding), map(padding, width - padding, min, max), interval(step), decimals(2)),
        update(onChange),
    ]);

    return (
        <div className='slider'>
            <div className='min'>{min}</div>
            <Movable {...props} className='track' ref={track}>
                <div className='filler' style={{width: position}}/>
                <div className='handle' style={{left: position}}/>
                <div className='tooltip' style={{left: position}}>{value}</div>
            </Movable>
            <div className='max'>{max}</div>
        </div>
    );
});

export default () => {
    const [value1, onChange1] = useState(100);
    const [value2, onChange2] = useState(100);
    const [value3, onChange3] = useState(3);
    const [value4, onChange4] = useState(15);
    const [value5, onChange5] = useState(0.5);
    return (
        <>
            <Slider value={value1} onChange={onChange1} min={0} max={200}/>
            <Slider value={value2} onChange={onChange2} min={0} max={2000} step={100}/>
            <Slider value={value3} onChange={onChange3} min={0} max={10}/>
            <Slider value={value4} onChange={onChange4} min={-50} max={50}/>
            <Slider value={value5} onChange={onChange5} min={0} max={1} step={0.01}/>
        </>
    );
};