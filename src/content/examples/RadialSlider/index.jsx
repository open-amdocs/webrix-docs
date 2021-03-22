import React, {useMemo, useState, useRef, memo} from 'react';
import {Movable} from 'webrix/components';
import {useDimensions} from 'webrix/hooks';
import './style.scss';

const {update, trackpad, transform} = Movable.Operations;
const {map, angle, interval, decimals} = Movable.Transformers;

const Circle = memo(({width, angle, rotate, ...props}) => {
    const r = 50 - width / 2, cx = 50, cy = 50;
    const circumference = 2 * Math.PI * r;
    return (
        <circle
            cx={cx} cy={cy} r={r}
            style={{transform: `rotate(${rotate - 90}deg)`}}
            strokeWidth={width}
            strokeDasharray={`${circumference * (angle / 360)} ${circumference}`}
            strokeDashoffset={0}
            strokeLinecap='round' {...props}/>
    );
});

const RadialFiller = memo(({rotate, angle, value, width, lines}) => (
    <svg className='radial-filler' viewBox='0 0 100 100' xmlns='http://www.w3.org/2000/svg'>
        <defs>
            <linearGradient id='gradient' x1='0%' y1='0%' x2='100%' y2='0%'>
                <stop offset='0%' stopColor='#00bc9b' />
                <stop offset='100%' stopColor='#5eaefd' />
            </linearGradient>
            <filter id='inset-shadow'>
                <feFlood floodColor='rgba(0,0,0,0.3)'/>
                <feComposite operator='out' in2='SourceGraphic'/>
                <feGaussianBlur stdDeviation='1'/>
                <feComposite operator='atop' in2='SourceGraphic'/>
            </filter>
        </defs>
        <Circle width={width} rotate={rotate} angle={angle} filter='url(#inset-shadow)' stroke='white'/>
        <g>
            {[...new Array(lines)].map((_, i) => (
                <path key={i} style={{transform: `rotate(${map(0, lines, rotate, angle + rotate)(i)}deg)`}} d='M50,3 L50,9'/>
            ))}
        </g>
        <Circle width={width} rotate={rotate} angle={value} stroke='url(#gradient)'/>
    </svg>
));

const RadialSlider = memo(({value, onChange, min, max, rotate, angle: _angle, step = 0.1}) => {
    const track = useRef({});
    const {width, height} = useDimensions(track);
    const _value = map(min, max, 0, _angle)(value);

    const props = Movable.useMove(useMemo(() => [
        trackpad(track),
        transform(angle({
            center: {x: width / 2, y: height / 2},
            angle: {from: rotate, range: _angle},
            output: {min, max},
        }), interval(step), decimals(1)),
        update(onChange),
    ], [width, height, min, max, onChange, _angle, rotate, step]));

    return (
        <div className='slider'>
            <div className='min'>{min.toFixed(1)}</div>
            <Movable {...props} className='track' ref={track}>
                <RadialFiller width={12} rotate={rotate} angle={_angle} value={_value} lines={max - min}/>
                <div className='handle' style={{transform: `rotate(${_value + rotate}deg)`}}/>
                <div className='value'>{value.toFixed(1)}</div>
            </Movable>
            <div className='max'>{max.toFixed(1)}</div>
        </div>
    );
});

export default () => {
    const [value1, onChange1] = useState(25);
    const [value2, onChange2] = useState(25);
    return (
        <>
            <RadialSlider value={value1} onChange={onChange1} min={0} max={50} rotate={30} angle={300}/>
            <RadialSlider value={value2} onChange={onChange2} min={0} max={50} rotate={210} angle={300}/>
        </>
    );
};