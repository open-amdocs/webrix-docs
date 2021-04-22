import React, {useRef, useState} from 'react';
import {useDimensions} from 'webrix/hooks';
import './BasicExample.scss';

const getcolor = (height) => {
    const colors = [
        {bg: '#264653', color: '#fff'},
        {bg: '#2a9d8f', color: '#fff'}, 
        {bg: '#e9c46a', color: '#000'},
        {bg: '#f4a261', color: '#000'}, 
        {bg: '#e76f51', color: '#000'}
    ];
    if (height > 170) {
        return colors[0]
    } else if (height > 130) {
        return colors[1]
    } else if (height > 80) {
        return colors[2]
    } else if (height > 40) {
        return colors[3]
    }
    return colors[4]
}
export default () => {
    const myRef = useRef();
    const {width, height} = useDimensions(myRef);
    const {bg: bgColor, color} = getcolor(height);
    return (
            <div ref={myRef} className='resizable-container'>
                <div className='cube' style={{
                        height: height * 0.786,
                        width: width * 0.786,
                        backgroundColor: bgColor,
                        color: color,
                }}>{height} x {width}</div>
            </div>
    );
};