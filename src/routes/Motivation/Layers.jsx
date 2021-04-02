import React from 'react';
import './Layers.scss';

const Glow = ({color, id}) => (
    <filter id={id} filterUnits='userSpaceOnUse' x='-10' y='-10' width='120' height='120'>
        <feDropShadow dx='0' dy='1' stdDeviation='2' floodColor={color} floodOpacity='0.2'/>
        <feDropShadow dx='0' dy='-1' stdDeviation='2' floodColor={color} floodOpacity='0.2'/>
    </filter>
);

const Gradient = ({from, to, id}) => (
    <linearGradient id={id} x1='0%' y1='0%' x2='100%' y2='0%'>
        <stop offset='0%' stopColor={from} />
        <stop offset='100%' stopColor={to} />
    </linearGradient>
);

export const Layer = ({text, gradient, size, textSize =  5, offset = [0, 0, 0]}) => {
    const w = size, h = 40 * (size / 100), t = 5;
    const gid = Math.trunc(Math.random() * 10000 + 10000);
    const fid = Math.trunc(Math.random() * 10000 + 10000);
    return (
        <g className='layer' style={{
            '--offset-x': `${offset[0]}px`,
            '--offset-y': `${offset[1]}px`,
            '--offset-z': `${offset[2]}px`,
            '--size': `${size}`,
        }}>
            <path d={`M0,${h/2+t} v${-t} L${w/2},${0} L${w},${h/2} v${t} L${w/2},${h+t} Z`} fill={`url(#${gid})`} filter={`url(#${fid})`}/>
            <path d={`M0,${h/2+t} v${-t} L${w/2},${h} v${t} Z`}/>
            <path d={`M${w/2},${h+t} v${-t} L${w},${h/2}  v${t} Z`}/>
            <text x={0} y={0} dominantBaseline='middle' textAnchor='middle' style={{fontSize: textSize * size / 100}}>{text}</text>
            <defs>
                <Gradient id={gid} from={gradient[0]} to={gradient[1]}/>
                <Glow id={fid} color={gradient[0]}/>
            </defs>
        </g>
    );
}

export const Layers = ({children}) => (
    <svg className='layers' viewBox='0 0 100 100' xmlns='http://www.w3.org/2000/svg'>
        {children}
    </svg>
);