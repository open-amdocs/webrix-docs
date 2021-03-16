import React, {useCallback, useState, useRef, memo} from 'react';
import {Movable} from 'webrix/components';
import {useDimensions} from 'webrix/hooks';
import './style.scss';

const {transform, map, clamp, angle, interval, decimals} = Movable.Transform;
const {update, trackpad} = Movable.Constraints;

const RadialFiller = ({min, max, value, width}) => {
    const r = 50 - width / 2, cx = 50, cy = 50;
    const circumference = 2 * Math.PI * r;
    return (
        <svg className='radial-filler' viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
            <defs>
                <linearGradient id="gradient" x1="0%" y1="0%" x2="100%" y2="0%">
                    <stop offset="0%" stopColor="#00bc9b" />
                    <stop offset="100%" stopColor="#5eaefd" />
                </linearGradient>
                <filter id="inset-shadow">
                    <feFlood floodColor="rgba(0,0,0,0.3)"/>
                    <feComposite operator="out" in2="SourceGraphic"/>
                    <feGaussianBlur stdDeviation="1"/>
                    <feComposite operator="atop" in2="SourceGraphic"/>
                </filter>
            </defs>
            <circle
                cx={cx} cy={cy} r={r}
                filter='url(#inset-shadow)'
                stroke='white'
                strokeWidth={width}
                strokeDasharray={`${circumference * ((max - min) / 360)} ${circumference}`}
                strokeDashoffset={circumference * (-min / 360)}
                strokeLinecap='round'/>
            {[...new Array(40)].map((_, i) => (
                <path key={i} style={{transform: `rotate(${map(0, 40, min, max)(i)}deg)`}} d='M50,3 L50,9'/>
            ))}
            <circle
                cx={cx} cy={cy} r={r}
                stroke='url(#gradient)'
                strokeWidth={width}
                strokeDasharray={`${circumference * ((value - min) / 360)} ${circumference}`}
                strokeDashoffset={circumference * (-min / 360)}
                strokeLinecap='round'/>
        </svg>
    );
};

const RadialSlider = memo(({value, onChange, min, max, step = 1}) => {
    const track = useRef({});
    const {width, height} = useDimensions(track);
    const _value = transform(value, map(min, max, 30, 330));

    const props = Movable.useNewMove(
        trackpad(track),
        update(useCallback(v => (
            onChange(transform(v, angle(width / 2, height / 2), clamp(30, 330), map(30, 330, min, max), interval(0.1), decimals(1)))
        ), [onChange, width, height, min, max])),
    );

    return (
        <div className='slider'>
            <div className='min'>{min.toFixed(1)}</div>
            <Movable {...props} className='track' ref={track}>
                <RadialFiller width={12} min={30} max={330} value={_value}/>
                <div className='handle' style={{transform: `rotate(${_value}deg)`}}/>
                <div className='value'>{value.toFixed(1)}</div>
            </Movable>
            <div className='max'>{max.toFixed(1)}</div>
        </div>
    );
});

export default () => {
    const [value, onChange] = useState(25);
    return (
        <RadialSlider value={value} onChange={onChange} min={0} max={50}/>
    );
};