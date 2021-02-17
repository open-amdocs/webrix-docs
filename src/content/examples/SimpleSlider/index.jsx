import React, {useCallback, useState, useRef, memo} from 'react';
import {Movable} from 'webrix/components';
import {useDimensions} from 'webrix/hooks';
import './style.scss';

const map = (v, imin, imax, omin, omax) => (v - imin) / (imax - imin) * (omax - omin) + omin;
const precision = (n, p) => Math.round(n * Math.pow(10, p)) / Math.pow(10, p);
const interval = (n, i) => Math.round(n / i) * i;

const Slider = memo(({value, onChange, min, max, step = 1}) => {
    const track = useRef({});
    const {width} = useDimensions(track);
    const padding = 10;
    const position = map(value, min, max, padding, width - padding);
    const {padding: pad} = Movable.Constraints;
    const handleOnMove = useCallback(({left}) => {
        const normalized = map(left, padding, width - padding, min, max);
        onChange(precision(interval(normalized, step), 2));
    }, [onChange, width, min, max]);
    const props = Movable.useMoveArea({ref: track, onMove: handleOnMove, constraints: [pad(0, 10, 0, 10)]});

    return (
        <div className='slider'>
            <div className='min'>{min}</div>
            <Movable {...props} className='track'>
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