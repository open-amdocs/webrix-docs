import React, {useCallback, useState, useRef, useEffect} from 'react';
import {Movable} from 'webrix/components';
import './style.scss';

const Slider = ({value, onChange, min, max, step = 1}) => {
    const [width, setWidth] = useState(0);
    const track = useRef({});
    const padding = 10;
    const position = ((value - min) / (max - min) * width) + padding;
    const {padding: pad} = Movable.Constraints;
    const handleOnMove = useCallback(({left}) => {
        const normalized = ((left - padding) / width) * (max - min) + min;
        onChange(Math.round(normalized / step) * step);
    }, [onChange, width]);
    const props = Movable.useMoveArea({ref: track, onMove: handleOnMove, constraints: [pad(0, 10, 0, 10)]});

    useEffect(() => {
        setWidth(track.current.offsetWidth - padding * 2);
    }, [setWidth]);

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
};

export default () => {
    const [value1, onChange1] = useState(100);
    const [value2, onChange2] = useState(100);
    const [value3, onChange3] = useState(3);
    const [value4, onChange4] = useState(15);
    return (
        <>
            <Slider value={value1} onChange={onChange1} min={0} max={200}/>
            <Slider value={value2} onChange={onChange2} min={0} max={2000} step={100}/>
            <Slider value={value3} onChange={onChange3} min={0} max={10}/>
            <Slider value={value4} onChange={onChange4} min={-50} max={50}/>
        </>
    );
};