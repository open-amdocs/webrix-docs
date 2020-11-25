import React, {useCallback, useState, useRef} from 'react';
import {Movable} from 'webrix/components';
import './style.scss';

const MIN = 0, MAX = 200;

const clamp = (min, max, value) => Math.min(Math.max(value, min), max);

export default () => {
    const [value, setValue] = useState(MAX / 2);
    const movable = useRef();
    const position = `${(value / MAX) * 100}%`;
    const handleOnMove = useCallback(({x}) => {
        const {width, left} = movable.current.getBoundingClientRect();
        setValue(() => Math.round((clamp(0, width - 5, x - left) / width) * MAX));
    }, [setValue]);

    return (
        <div className='slider'>
            <div className='min'>{MIN}</div>
            <Movable className='track' ref={movable} onBeginMove={handleOnMove} onMove={handleOnMove}>
                <div className='filler' style={{width: position}}/>
                <div className='handle' style={{left: position}}/>
                <div className='tooltip' style={{left: position}}>{value}</div>
            </Movable>
            <div className='max'>{MAX}</div>
        </div>
    );
};