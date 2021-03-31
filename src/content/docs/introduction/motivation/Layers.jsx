import React from 'react';
import './Layers.scss';

const Gradient = ({from, to, id}) => (
    <linearGradient id={id} x1='0%' y1='0%' x2='100%' y2='0%'>
        <stop offset='0%' stopColor={from} />
        <stop offset='100%' stopColor={to} />
    </linearGradient>
)

const Layer = ({text, gradient, offset: o = 0}) => {
    const w = 100, h = 40, t = 5;
    return (
        <g className='layer' style={{transform: `translateY(${o}px)`, '--offset': `${o}px`}}>
            <path d={`M0,${h/2+t} v${-t} L${w/2},${0} L${w},${h/2} v${t} L${w/2},${h+t} Z`} fill={`url(#${gradient})`}/>
            <path d={`M0,${h/2+t} v${-t} L${w/2},${h} v${t} Z`}/>
            <path d={`M${w/2},${h+t} v${-t} L${w},${h/2}  v${t} Z`}/>
            <text x={0} y={0} dominantBaseline='middle' textAnchor='middle'>{text}</text>
        </g>
    );
}

export default ({}) => (
    <svg className='layers' viewBox='0 0 100 100' xmlns='http://www.w3.org/2000/svg'>
        <defs>
            <Gradient id='grad1' from='#E42746' to='#E42795'/>
            <Gradient id='grad2' from='#3186ab' to='#3153AB'/>
            <Gradient id='grad3' from='#11eda1' to='#11edda'/>
        </defs>
        <Layer text='Webrix.js' gradient='grad1' offset={40}/>
        <Layer text='UI Components' gradient='grad2' offset={20}/>
        <Layer text='App' gradient='grad3'/>
    </svg>
);